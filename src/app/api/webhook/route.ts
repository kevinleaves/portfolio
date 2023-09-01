import { NextRequest, NextResponse } from 'next/server'
import { convertToHTML } from './utils/convertToHTML'
import { SendGrid, getContactList } from 'src/app/_sendgrid/SendGrid'
import { Post } from 'types/interfaces'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

// * webhook triggers on blog post => retrieves contact list from SendGrid marketing API -> sends emails to the emails on the contact list.

// TODO: SECURE WEBHOOK W/ SVIX LIBRARY
// https://docs.svix.com/receiving/verifying-payloads/how

const secret = process.env.NEXT_PUBLIC_WEBHOOK_SECRET ?? ''

export async function POST(request: NextRequest) {
  const signature = request.headers.get(SIGNATURE_HEADER_NAME) ?? ''
  const readableStream = request.body as unknown as NodeJS.ReadableStream
  const stringifiedPayload = await readBody(readableStream)

  /** 
  if request to this endpoint doesn't come from Sanity CMS, respond with a 401. 
  otherwise, convert the payload to an HTML string, retrieve the newsletter contact list and send emails through SendGrid service 
  */
  if (!isValidSignature(stringifiedPayload, signature, secret)) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'INVALID WEBHOOK SIGNATURE' }),
      { status: 401, headers: { 'content-type': 'application/json' } }
    )
  } else {
    const body: Post = JSON.parse(stringifiedPayload)
    const { _id, title, body: content } = body
    const htmlString = convertToHTML(content)
    const response = await getContactList()
    const recipients = response.contact_sample.map((contact) => {
      const { email, first_name, last_name } = contact
      return { email, name: `${first_name} ${last_name}` }
    })
    const res = await SendGrid(title, htmlString, recipients)
    return NextResponse.json(body)
  }
}

/**
 * @function readBody
 * @param readable Node.JS ReadableStream
 * @returns a parsable JSON string of the request body
 */
async function readBody(readable: NodeJS.ReadableStream) {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}

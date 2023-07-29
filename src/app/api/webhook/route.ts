import { NextRequest, NextResponse } from 'next/server'
import { convertToHTML } from './utils/convertToHTML'
import { SendGrid, getContactList } from 'src/app/_sendgrid/SendGrid'
import { Post } from 'types/interfaces'

// * webhook triggers on blog post => retrieves contact list from SendGrid marketing API -> sends emails to the emails on the contact list.

export async function POST(request: NextRequest) {
  const body: Post = await request.json()
  // console.log(body, 'body')
  const { _id, title, body: content } = body
  const htmlString = convertToHTML(content)
  const response = await getContactList()
  const recipients = response.contact_sample.map((contact) => {
    const { email, first_name, last_name } = contact
    return { email, name: `${first_name} ${last_name}` }
  })
  // console.log(recipients, 'recipients')
  const res = await SendGrid(title, htmlString, recipients)
  // console.log(res, 'res')
  return NextResponse.json(body)
}

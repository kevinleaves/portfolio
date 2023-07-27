import { NextRequest, NextResponse } from 'next/server'
import { convertToHTML } from './utils/convertToHTML'
import { SendGrid, getContactList } from 'src/app/_sendgrid/SendGrid'
import { Post, GetListResponse, Contact } from 'types/interfaces'

export async function POST(request: NextRequest) {
  const body: Post = await request.json()
  console.log(body)
  const { _id, title, body: content } = body
  const htmlString = convertToHTML(content)
  // console.log(convertToHTML(content), 'htmlstring')
  const response = await getContactList()
  // console.log(response, 'response')
  const recipients = response.contact_sample.map((contact) => {
    const { email, first_name, last_name } = contact
    return { email, name: `${first_name} ${last_name}` }
  })
  const res = await SendGrid(title, htmlString, recipients)

  return NextResponse.json(body)
}

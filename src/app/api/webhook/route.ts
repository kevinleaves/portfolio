import { NextRequest, NextResponse } from 'next/server'
import { convertToHTML } from './utils/convertToHTML'
import SendGrid from 'src/app/_sendgrid/SendGrid'

export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log(body)
  const { _id, title, body: content } = body
  const htmlString = convertToHTML(content)
  console.log(convertToHTML(content), 'htmlstring')
  const res = await SendGrid(htmlString)
  return NextResponse.json(body)
}

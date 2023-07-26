import { NextRequest, NextResponse } from 'next/server'

const url = 'https://api.sendgrid.com/v3/mail/send'

const SENDGRID_API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY
const SEND_FROM = process.env.NEXT_PUBLIC_SEND_FROM_EMAIL
const SEND_TO = process.env.NEXT_PUBLIC_SEND_TO_EMAIL

const body = {
  personalizations: [
    {
      to: [
        {
          email: SEND_TO,
          name: 'Kevin Le',
        },
      ],
      subject: 'Are we back?',
    },
  ],
  content: [
    {
      type: 'text/html',
      value:
        "<span>Are we back?</span><img src='https://cdn.sanity.io/images/ep4izq52/production/5feb5232546bcf16d525185ef5f3a499990544fe-1200x1200.jpg' alt-='Image'><span>We are so back</span>",
    },
  ],
  from: {
    email: SEND_FROM,
    name: 'Kevin Le',
  },
  reply_to: {
    email: SEND_FROM,
    name: 'Kevin Le',
  },
}

const options = {
  method: 'POST',
  headers: {
    authorization: `Bearer ${SENDGRID_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log(body)
  const { _id, title, body: content } = body
  try {
    const res = await fetch(url, options)
    console.log(res, 'res')
    return NextResponse.json(res)
  } catch (err) {
    console.log(err, 'err')
  }
  return NextResponse
}

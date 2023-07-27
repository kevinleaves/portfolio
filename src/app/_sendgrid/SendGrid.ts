const url = 'https://api.sendgrid.com/v3/mail/send'

const SENDGRID_API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY
const SEND_FROM = process.env.NEXT_PUBLIC_SEND_FROM_EMAIL
const SEND_TO = process.env.NEXT_PUBLIC_SEND_TO_EMAIL

/**
 *
 * takes in a richtext converted into htmlstring and fires request to sendgrid mailsend api
 * @param subject is the email's subject
 * @param content is an HTML string containing the body of the email
 * @returns a promise
 */

export default async function SendGrid(subject: string, content: string) {
  console.log(content)
  const body = {
    personalizations: [
      {
        to: [
          {
            email: SEND_TO,
            name: 'Kevin Le',
          },
        ],
        subject,
      },
    ],
    content: [
      {
        type: 'text/html',
        value: content,
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

  return fetch(url, options)
}

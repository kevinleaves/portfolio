import { GetListResponse } from 'types/interfaces'

const url = 'https://api.sendgrid.com/v3/mail/send'

const SENDGRID_API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY
const SEND_FROM = process.env.NEXT_PUBLIC_SEND_FROM_EMAIL

/**
 *
 * takes in a richtext converted into htmlstring and fires request to sendgrid mailsend api
 * @param subject is the email's subject
 * @param content is an HTML string containing the body of the email
 * @param recipients an array of recipients
 * @returns a promise
 */

interface Recipient {
  email: string
  name: string
}

export async function SendGrid(
  subject: string,
  content: string,
  recipients: Recipient[]
) {
  const body = {
    personalizations: [
      {
        to: [{ email: SEND_FROM, name: 'Kevin Le' }],
        bcc: recipients,
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
    //* toggle this on during development & off in production
    //* https://docs.sendgrid.com/for-developers/sending-email/sandbox-mode
    // mail_settings: {
    //   sandbox_mode: {
    //     enable: true,
    //   },
    // },
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

export async function getContactList() {
  const listID = process.env.NEXT_PUBLIC_SENDGRID_NEWSLETTER_LIST_ID

  //! this does not scale. api only allows for fetch of 50 contacts. once we reach >50 contacts, store your email list elsewhere
  const url = `https://api.sendgrid.com/v3/marketing/lists/${listID}?contact_sample=true`

  const options = {
    method: 'GET',
    headers: {
      authorization: `Bearer ${SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
  }

  const contacts: Promise<GetListResponse> = (await fetch(url, options)).json()
  return contacts
}

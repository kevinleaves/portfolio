import './globals.css'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react'
import { Inter, Inter_Tight, Roboto_Mono } from 'next/font/google'
import { Navbar } from '@modules/navbar'
import { Footer } from '@modules/footer'

export const metadata = {
  icons: {
    icon: '/images/logos/monkey.png',
  },
  title: 'Kevin Le | Software Engineer',
  description: 'Porfolio for Kevin Le, a Full Stack Software Engineer',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const inter_tight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-intertight',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${roboto_mono.variable} ${inter_tight.variable}`}
    >
      <body className='font-intertight'>
        <div className='mx-auto min-h-screen max-w-3xl min-w-[320px] flex-col gap-8 pb-8'>
          <Providers>
            <Navbar />
            <div className='flex flex-col gap-8'>{children}</div>
            <Footer />
            <Analytics />
          </Providers>
        </div>
      </body>
    </html>
  )
}

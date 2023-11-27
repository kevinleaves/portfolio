import './globals.css'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react'
import { Inter, Inter_Tight, Roboto_Mono } from 'next/font/google'
import { Navbar } from '@modules/navbar'


export const metadata = {
  icons: {
    icon: '/images/logos/monkey.png',
  },
  title: 'Kevin Le | Software Engineer',
  description: 'Porfolio for Kevin Le, a Full Stack Software Engineer',
}

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono'
})

const inter_tight = Inter_Tight({ subsets: ['latin'], display: 'swap', variable: '--font-intertight' })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${inter.variable} ${roboto_mono.variable} ${inter_tight.variable}`}>

      <body className='p flex min-h-screen min-w-[320px] flex-col bg-lightPrimary p-8 dark:bg-darkPrimary dark:text-lightPrimary md:px-24 font-intertight'>
        <Providers>
        <Navbar />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}

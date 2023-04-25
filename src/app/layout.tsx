import './globals.css'

export const metadata = {
  icons: {
    icon: '/images/logos/monkey.png',
  },
  title: 'Kevin Le | Software Engineer',
  description: 'Porfolio for Kevin Le, a Full Stack Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='dark'>
      <body className='flex min-h-screen min-w-[320px] flex-col bg-lightPrimary dark:bg-darkPrimary dark:text-lightPrimary'>
        {children}
      </body>
    </html>
  )
}

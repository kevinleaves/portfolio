import { Home } from '@modules/home'
import { Work } from '@modules/work'
import { About } from '@modules/about'
import { ContactForm } from '@modules/contact'

export default function App() {
  return (
    <>
      <main className='flex h-full flex-col gap-16'>
        <Home />
        <About />
        <Work />
        <ContactForm />
      </main>
    </>
  )
}

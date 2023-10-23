import { Home } from '@modules/home'
import { Work } from '@modules/work'
import { About } from '@modules/about'
import { Hobbies } from '@modules/hobbies'
import { Footer } from '@modules/footer'

export default function App() {
  return (
    <>
      <main className='flex h-full flex-col gap-16'>
        <Home />
        <About />
        <Work />
        <Hobbies />
        <Footer />
      </main>
    </>
  )
}

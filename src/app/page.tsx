import { Home } from '@modules/home'
import { Work } from '@modules/work'
import { About } from '@modules/about'
import { Contact } from '@modules/contact'
import { Skills } from '@modules/skills'

export default function App() {
  return (
    <div className='flex'>
      <Home />
      <Work />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}

import { Work } from '@modules/work'
import { About } from '@modules/about'

export default function App() {
  return (
    <main className='flex! flex-col gap-4 px-8'>
      <About />
      <Work />
    </main>
  )
}

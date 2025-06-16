import { SoundCloud } from '@modules/hobbies'

interface Props {}

export default function InterestsPage({}: Props) {
  return (
    <section className='flex flex-col items-center justify-center gap-4 px-10 py-10'>
      <p>
        I DJ a bit, and I've made a few EDM mixes. You can find them below : )
      </p>
      <SoundCloud />
    </section>
  )
}

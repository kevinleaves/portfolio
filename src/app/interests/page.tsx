import { SoundCloud } from '@modules/hobbies'

interface Props {}

export default function InterestsPage({}: Props) {
  return (
    <section className='flex flex-col items-center justify-center gap-4 px-10 py-10'>
      <h2 className='mb-3 text-center text-3xl font-medium'>Interests</h2>
      <p>
        I have a passion for music, and I've made a few EDM mixes. You can find
        them below : )
      </p>
      <SoundCloud />
    </section>
  )
}

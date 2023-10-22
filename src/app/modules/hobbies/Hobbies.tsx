import SoundCloud from './Soundcloud'

type Props = {}

export default function Hobbies({}: Props) {
  return (
    <section
      className='flex flex-col items-center justify-center gap-4 py-10 px-10'
      id='hobbies'
    >
      <h2 className='mb-3 text-center text-3xl font-medium '>hobbies</h2>
      <p>
        I have a passion for music, and I've made a few EDM mixes. You can find
        them below : )
      </p>
      <SoundCloud></SoundCloud>
    </section>
  )
}

export default function Home(): JSX.Element {
  return (
    <section
      className='border-t-2 border-solid border-black p-8 dark:border-white md:p-24 font-roboto_mono'
      id='home'
    >
      <h1 className='text-2xl font-semibold md:text-3xl'>
        Hi, my name is
        <p className='text-5xl font-extrabold text-blue-300'>Kevin.</p>
        I'm a full stack developer who loves to transform ideas into code.
      </h1>
    </section>
  )
}

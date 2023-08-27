import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center gap-4 text-xl'>
      <h2>don&apos;t worry, you didn&apos;t break anything...</h2>
      <div className='text-6xl font-extrabold'>
        <h1>404</h1>
      </div>
      <p>we just can&apos;t find what you&apos;re looking for.</p>
      <p className=''>
        you can head back to my{' '}
        <Link href={'/blog'} className='font-bold'>
          blog
        </Link>{' '}
        or to look for more, or head back to my{' '}
        <Link href={'/'} className='font-bold'>
          portfolio
        </Link>{' '}
        if you&apos;d like to check out some more of my work.
      </p>
    </div>
  )
}

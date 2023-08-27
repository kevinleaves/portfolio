interface Props {
  category: string
}

export default function PostCategory({ category }: Props) {
  return (
    <div className='flex items-center gap-2 font-extralight'>
      Tags:
      <div className='inline-block w-fit rounded-lg border-2 border-dotted border-slate-400 p-2'>
        {category}
      </div>
    </div>
  )
}

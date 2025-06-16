'use client'
import React from 'react'

interface Props {
  // Define your component's props here
}

const TestComponent: React.FC<Props> = ({}) => {
  const ref = React.useRef<HTMLDivElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log('Clicked at:', x, y)
  }

  React.useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      console.log(rect)
    }
  }, [])

  return (
    <div ref={ref} className='h-96 w-48 border-2' onClick={handleClick}></div>
  )
}

export default TestComponent

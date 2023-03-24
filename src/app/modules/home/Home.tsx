import React, { useEffect, useReducer } from 'react'
import Image from 'next/image'

const titles = [
  'software engineer',
  'fullstack engineer',
  'ui/ux designer',
  'frontend engineer',
  'backend engineer',
]

type State = {
  index: number
}

type Action = { type: 'increment' } | { type: 'reset' }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        index: state.index + 1,
      }
    case 'reset':
      return {
        ...state,
        index: 0,
      }
    default:
      return state
  }
}

export default function Home() {
  const initialState = { index: 0 }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const changeTitle = () => {
      setTimeout(() => {
        dispatch({ type: 'increment' })
      }, 3000)

      if (state.index >= titles.length) {
        dispatch({ type: 'reset' })
      }
    }
    changeTitle()
  }, [state.index])

  const title = titles[state.index]

  return (
    <div className=''>
      <div className='flex items-end gap-2 text-4xl'>
        <p className='flex items-end gap-2'>
          hi
          <Image
            src='/images/logos/9434-bird-wave.png'
            alt='birdwave'
            height={50}
            width={50}
          />
          , my name is kevin le and i am a
        </p>
        <p
          key={title}
          className='animate-pulsemore transition duration-1000 ease-in-out'
        >
          {title}
        </p>
      </div>
    </div>
  )
}

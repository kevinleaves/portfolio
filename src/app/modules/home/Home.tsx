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

export default function Home(): JSX.Element {
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
    <section className='flex flex-col gap-2 text-3xl md:flex-row md:items-end'>
      <h5 className='flex items-start gap-2 md:items-end'>
        hi, my name is
        <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent'>
          Kevin Le.
        </h1>
        and i am a
      </h5>
      <h3
        key={title}
        className='animate-pulsemore bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-center text-transparent transition duration-1000 ease-in-out'
      >
        {title}
      </h3>
    </section>
  )
}

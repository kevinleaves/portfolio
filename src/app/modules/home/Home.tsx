import React, { useEffect, useReducer, RefObject } from 'react'

const titles = [
  'software engineer',
  'fullstack engineer',
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

type Props = {
  homeRef: RefObject<HTMLElement>
}

export default function Home({ homeRef }: Props): JSX.Element {
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
    <section
      ref={homeRef}
      className='grid h-[50vh] w-[100vw] place-content-center gap-2 text-3xl md:h-[100vh]'
      id='home'
    >
      <div className='place-items-center gap-2 '>
        <h1 className='items-start gap-2'>
          hi, my name is
          <p className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent'>
            Kevin Le.
          </p>
          and i am a
        </h1>
        <div className='w-60'>
          <h3
            key={title}
            className='z-0 animate-pulsemore bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-start text-transparent transition duration-1000 ease-in-out'
          >
            {title}
          </h3>
        </div>
      </div>
    </section>
  )
}

import React, { useState, useEffect } from 'react'

type DarkModeState = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

export default function useDarkMode(): DarkModeState {
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    if (window === undefined) return
    const root = window.document.documentElement
    // if isEnabled is true, add 'dark' to html tag. otherwise remove it from the html tag.
    if (isEnabled) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isEnabled])

  return [isEnabled, setIsEnabled]
}

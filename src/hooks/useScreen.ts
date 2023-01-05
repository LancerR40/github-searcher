import { useState, useEffect } from 'react'

type ScreenProps = {
  width: number,
  height: number,
}

const useScreen = (): ScreenProps => {
  const [screen, setScreen] = useState<ScreenProps>({ width: window.innerWidth, height: window.innerHeight })

  const screenListener = () => {
    const { innerWidth: width, innerHeight: height } = window
    setScreen({ width, height })
  }

  useEffect(() => {
    window.addEventListener('resize', screenListener)
    return () => {
      window.removeEventListener('resize', screenListener)
    }
  }, [window.innerWidth, window.innerHeight])

  return screen
}

export default useScreen
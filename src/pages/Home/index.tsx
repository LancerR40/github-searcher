import React, { useEffect, useState } from 'react'
import Searcher from '../../components/Searcher'
import UserCard from '../../components/UserCard'
import Container from '@mui/material/Container'
import NotFound from '../../components/NotFound'
import CircularProgress from '@mui/material/CircularProgress'
import styles from './styles'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import styled from '@mui/material/styles/styled'
import API from '../../api'
import { GitHubUser } from '../../types'

type UserNotFound = {
  isNotFound: boolean,
  message: string,
}

const notFoundInitialState = {
  isNotFound: false,  
  message: '',
}

const CustomContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#f2f2f2' : '#161e35'
}))

const HomePage = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.only('md'))
  const containerMaxWidth = matches ? 'md' : 'lg'

  const [text, setText] = useState<string>('')
  const [username, setUsername] = useState<string>('Octocat')
  const [user, setUser] = useState<GitHubUser | {}>({})
  const [notFound, setNotFound] = useState<UserNotFound>(notFoundInitialState)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    getGitHubUser()
  }, [username])

  useEffect(() => {
    window.addEventListener('keypress', handleEnterKey)

    /* clean up when component is unmounted */
    return () => {
      window.removeEventListener('keypress', handleEnterKey)
    }
  }, [text])
  
  const getGitHubUser = async () => {
    setNotFound(notFoundInitialState)
    setIsLoading(true)
    const response = await API.getGitHubUsersByUsername(username)
    setIsLoading(false)

    if (response.result === 'error') {
      return setNotFound({ isNotFound: true, message: 'Ups! user not found 🧑🏻‍🚀 ...' })
    }

    setUser(response.data)
  }

  const onClick = () => {
    setUsername(text.trim())
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleEnterKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClick()
    }
  }

  const renderUser = notFound.isNotFound 
    ? <NotFound sx={{ mx: 'auto', mt: 3, }} message={notFound.message} /> 
    : <UserCard user={user as GitHubUser} />

  return (
    <CustomContainer sx={styles.container} maxWidth={containerMaxWidth} disableGutters>
      <Searcher 
        sx={{ width: '100%', maxWidth: 800, mx: 'auto' }} 
        placeholder="Search by username..."
        value={text}
        onChange={onChange} 
        onClick={onClick}
      />

      {isLoading === true 
        ? <CircularProgress sx={{ mt: 4, mx: 'auto', }} /> 
        : renderUser
      }
    </CustomContainer>
  )
}

export default HomePage
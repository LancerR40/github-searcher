import React, { useEffect, useState, memo, useMemo } from 'react'
import Searcher from '../../components/Searcher'
import UserCard from '../../components/UserCard'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import styles from './styles'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import styled from '@mui/material/styles/styled'
import API from '../../api'
import { GitHubUser } from '../../types'

const CustomContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#f2f2f2' : '#161e35'
}))

const HomePage = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.only('md'))
  const containerMaxWidth = matches ? 'md' : 'lg'

  const [text, setText] = useState<string>('')
  const [username, setUsername] = useState<string>('Octocat')
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    getGitHubUser()
  }, [username])
  
  const getGitHubUser = async () => {
    setIsLoading(true)
    const response = await API.getGitHubUsersByUsername(username)
    setIsLoading(false)

    if (response.result === 'error') {
      return alert(response.message)
    }

    setUser(response.data)
  }

  const onClick = () => {
    setUsername(text)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

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
        ? <CircularProgress sx={{ mt: 4 }} /> 
        : <UserCard user={user as GitHubUser} />
      }
    </CustomContainer>
  )
}

export default HomePage
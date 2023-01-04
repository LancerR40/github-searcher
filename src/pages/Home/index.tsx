import React, { useEffect, useState } from 'react'
import Searcher from '../../components/Searcher'
import UserCard from '../../components/UserCard'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import styles from './styles'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import API from '../../api'
import { GitHubUser } from '../../types'

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

    console.log(response.data)
    setUser(response.data)
  }

  const onClick = () => {
    setUsername(text)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <Container sx={styles.container} maxWidth={containerMaxWidth}>
      <Searcher 
        sx={{ width: '100%', maxWidth: 800 }} 
        placeholder="Search by username..."
        value={text} 
        onChange={onChange} 
        onClick={onClick}
      />

      {isLoading === true 
        ? <CircularProgress sx={{ mt: 4 }} /> 
        : <UserCard user={user as GitHubUser} />
      }
    </Container>
  )
}

export default HomePage
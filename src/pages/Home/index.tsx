import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Searcher from '../../components/Searcher'
import styles from './styles'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import API from '../../api'

const HomePage = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.only('md'))
  const containerMaxWidth = matches ? 'md' : 'lg'

  const [text, setText] = useState<string>('')
  const [username, setUsername] = useState<string>('Octocat')

  useEffect(() => {
    getGitHubUser()
  }, [username])
  
  const getGitHubUser = async () => {
    const response = await API.getGitHubUsersByUsername(username)

    if (response.result === 'error') {
      return alert(response.error)
    }

    console.log(response.data)
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
    </Container>
  )
}

export default HomePage
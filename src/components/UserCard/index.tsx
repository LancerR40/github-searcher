import React from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import styled from '@mui/material/styles/styled'
import LocationOnIcon from "@mui/icons-material/LocationOn"
import TwitterIcon from '@mui/icons-material/Twitter'
import LanguageIcon from "@mui/icons-material/Language"
import BusinessIcon from '@mui/icons-material/Business'
import { GitHubUser } from '../../types'

type UserCardProps = {
  user: GitHubUser,
}

enum Messages {
  NAME_NOT_FOUND = 'Name is not found 🧑🏻‍🚀 ...',
  BIO_NOT_FOUND = 'Bio is not found 🤔 ...',
  NOT_AVAILABLE = 'Not available',
}
const { NAME_NOT_FOUND, BIO_NOT_FOUND, NOT_AVAILABLE } = Messages

const formatOutput = (value: string | null, message: Messages): string => {
  return value ? value : message
}

const UserCard = ({ user }: UserCardProps) => {
  const { name, avatar_url, created_at, login, bio, html_url, public_repos, followers, following, location, twitter_username, company, blog } = user
  const userName     = formatOutput(name, NAME_NOT_FOUND)
  const userBio      = formatOutput(bio, BIO_NOT_FOUND)
  const userLocation = formatOutput(location, NOT_AVAILABLE)  
  const userTwitter  = formatOutput(twitter_username, NOT_AVAILABLE)
  const userBlog     = formatOutput(blog, NOT_AVAILABLE)
  const userCompany  = formatOutput(company, NOT_AVAILABLE)

  const CustomPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#080c25'
  }))

  const userInformation = [
    { title: 'Public Repos', value: public_repos },
    { title: 'Followers', value: followers },
    { title: 'Following', value: following },
  ]

  return (
    <Grid container spacing={3} sx={{ my: 2, }}>
      <Grid item xs={12} md={3}>
        <CardMedia sx={{ maxWidth: 400, borderRadius: '50%' }} component='img' alt={name} image={avatar_url} />
      </Grid>
      <Grid item xs={12} md={9}>
        <Stack spacing={1}>
          <Stack display={{ xs: 'block', md: 'flex' }} direction="row" justifyContent="space-between" alignItems="center">
            <Typography component="h2" variant='h4'>{userName}</Typography>
            <Typography>{new Date(created_at).toLocaleString()}</Typography>
          </Stack>
          <Button sx={{ textTransform: 'none', width: 'fit-content', p: 0 }} size="small" href={html_url} target="_blank" rel="noopener">
            <Typography>@{login}</Typography>
          </Button>
          <Typography component="p">
            {userBio}
          </Typography>
          <CustomPaper elevation={3}>
            <Stack 
              sx={{ py: 2 }}
              direction={{ xs: 'column', md: 'row' }}
              justifyContent='space-around'
              alignItems='center'
              spacing={2}
            >
              {userInformation.map(({ title, value }) => (
                <Stack key={title} spacing={1} textAlign="center">
                  <Typography component="h3" variant="h5">{title}</Typography>
                  <Typography component="h4" variant="h6">{value}</Typography>
                </Stack>
              ))}
            </Stack>
          </CustomPaper>
          <Grid container rowSpacing={3}>
            <Grid item xs={6}>
              <Stack direction='row' spacing={1}>
                <LocationOnIcon />
                <Typography component="span">{userLocation}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack direction='row' spacing={1}>
                <TwitterIcon />
                {userTwitter !== NOT_AVAILABLE
                  ? <Link 
                      href={`https://twitter.com/${userTwitter}`} 
                      target="_blank" 
                      rel="noopener" 
                      color="inherit" 
                      underline="none"
                    >
                      @{userTwitter}
                    </Link>
                  : <Typography>{userTwitter}</Typography>
                }
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack direction='row' spacing={1}>
                <LanguageIcon />
                {userBlog !== NOT_AVAILABLE
                  ? <Link 
                      href={userBlog} 
                      target="_blank" 
                      rel="noopener" 
                      color="inherit" 
                      underline="none"
                      noWrap={true}
                    >
                      {userBlog}
                    </Link>
                  : <Typography>{userBlog}</Typography>
                }
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack direction='row' spacing={1}>
                <BusinessIcon />
                <Typography component="span">{userCompany}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default UserCard
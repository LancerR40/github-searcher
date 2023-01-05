import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

type NotFoundProps = {
  sx?: object,
  message: string,
}

const NotFound = ({ sx, message }: NotFoundProps) => {
  return (
    <Stack sx={{ ...sx, textAlign: 'center', }}>
      <Typography component="h2" variant="h1">404</Typography>
      <Typography>{message}</Typography>
    </Stack>
  )
}

export default NotFound
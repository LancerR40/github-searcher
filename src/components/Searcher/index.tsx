import React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

type SearcherProps = {
  sx?: object,
  placeholder?: string
  value?: string,
  onClick?: () => void,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Searcher = ({ sx, placeholder, value, onChange, onClick }: SearcherProps) => {
  return (
    <FormControl sx={sx} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-searcher" size="small">GitHub User</InputLabel>
        <OutlinedInput
          id="outlined-adornment-searcher"
          size='small'
          endAdornment={
            <InputAdornment position="end">
              <IconButton size='small' edge="end" onClick={onClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          label="GitHub User"
        />
    </FormControl>
  )
}

export default Searcher
import { useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Courses = () => {
    const [keyword, setKeyword] = useState('')
    const [category, setCategory] = useState('');

    const categories = [
        "Web Devlopment",
        "App Devlopment",
        "Cloud Computing",
        "Data Science",
        "Machine Learning",
        "Artificial Intelligence",
        "Blockchain",
        "Cyber Security",
        "Data Engineering",

    ]

  return (
    <Box minWidth={'5vw'}>
      <Stack direction="column" spacing={2} sx={{ mb: 3 }}>
        <Typography fontFamily={'Sora'} fontWeight={300} fontSize={'2rem'}>
          All Courses
        </Typography>
        <TextField
          label="Search"
          variant="outlined"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
      </Stack>
      <Stack sx={{
        '&::-webkit-scrollbar': {
            display: 'none'
        }
      }} overflowX={'auto'} direction={'row'} spacing={2} mt={2} justifyContent={'center'}>
        {categories.map((cat ,index)=> (
          <Button
            variant="contained"
            sx={{ backgroundColor: '#bfbdbd' }}
            onClick={() => setCategory(cat)}
            key={index}
          >
            <Typography fontFamily={'Sora'} fontWeight={700} fontSize={'1rem'}>
              {cat}
            </Typography>
          </Button>
        ))}
      </Stack>
    </Box>
  );
}

export default Courses
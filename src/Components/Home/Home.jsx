import { Box, Button, ImageListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import study from '../../Assets/Images/study.jpg'
import Image from 'mui-image';
import { SiUdemy, SiUdacity } from 'react-icons/si';
import { DiAws, DiApple } from 'react-icons/di';
import { AiOutlineGoogle } from 'react-icons/ai';
import intro from '../../Assets/Videos/intro.mp4'


function Home() {
  return (
    <section className="home">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        height={'100%'}
        justifyContent={{ xs: 'center', sm: 'space-between' }}
        alignItems={{ xs: 'center', sm: 'center' }}
        spacing={{ xs: 20, sm: 40 }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Stack spacing={5} direction={'column'}>
            <Typography
              variant="h1"
              sx={{ fontFamily: 'Kanit', textTransform: 'capitalize' }}
            >
              Learn from the experts
            </Typography>
            <Typography variant="h4" sx={{ fontFamily: 'Montserrat' }}>
              Find valuable content in such an affordable price, like a
              &#127856;
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Explore Courses
            </Button>
          </Stack>
        </Stack>
        <Image src={study} alt="study" style={{ borderRadius: 25 }} />
      </Stack>

      <Box
        marginTop={20}
        justifyContent={'center'}
        display={'flex'}
        flexDirection={'column'}
      >
        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
          <Typography
            color={'yellow'}
            variant="h3"
            sx={{ fontFamily: 'Quicksand',padding:3 }}
          >
            Our Brands
          </Typography>
        </Box>
        <Stack
          direction={'row'}
          justifyContent={'space-evenly'}
          alignItems={'center'}
          spacing={10}
          fontSize={40}
          sx={{ color: 'yellow', backgroundColor: 'black', padding: 2 }}
        >
          <DiApple />
          <SiUdacity />
          <SiUdemy />
          <DiAws />
          <AiOutlineGoogle />
        </Stack>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
        <video src={intro} autoPlay loop muted style={{width:'50%',borderRadius:25}} controls={false}></video>
      </Box>
    </section>
  );
}

export default Home
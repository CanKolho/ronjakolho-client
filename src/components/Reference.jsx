import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom'


const Reference = ({ reference }) => {
  const isMobile = useMediaQuery('(max-width: 900px)')

  return (
    <>
      <Stack spacing={1.5} sx={{ 
        mt: 25,
        mb: 10,
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <Typography variant='h3'>
          {reference.title}
        </Typography>
        <Typography variant='subtitle1'>
          {reference.description}
        </Typography>
        <Divider sx={{ mx: '4rem', width: '75%'}} />
      </Stack>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '4rem',
        mx: isMobile ? 5 : 10,
        mb: 10,
        }}>
        {reference.images.map((image, index) => (
          <Box 
            sx={{
              '&:hover': {
                opacity: 0.9,
              },
              transition: 'opacity 0.3s ease',
            }}>
            <img 
              key={index} 
              src={image.src} 
              style={{ 
                width: isMobile ? '80vw' : '20vw',
              }}
            />
          </Box>
        ))}
      </Box>
      <Link to='/references' style={{ textDecoration: 'none', color: 'black' }}>
        <Typography variant='h6' sx={{ textAlign: 'center', mb: 5, '&:hover': { cursor: 'pointer' } }}>
          Back to all references
        </Typography>
      </Link>
    </>
  )
}

export default Reference
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom'

const ReferencesBox = ({ reference }) => {
  const isMobile = useMediaQuery('(max-width: 900px)');
  
  const imgContainerStyle = {
    width: isMobile ? '60vw' : '15vw',
    position: 'relative',
  };

  const imgStyle = { 
    width: isMobile ? '60vw' : '15vw',
    aspectRatio: '1/1',
    objectFit: 'cover',
    backgroundColor: 'rgb(231, 231, 231)', 
    padding: '.15em', 
    border: '1px solid rgb(196, 195, 195)',
    position: 'relative', // Ensures the main image is positioned above the before/after images
    zIndex: 2, // Higher than before/after images
    transition: 'transform .5s ease-in-out', // For hover effect
  };

  const beforeAfterStyle = {
    ...imgStyle,
    position: 'absolute',
    top: 0, // Aligns with the top of the container
    left: 0, // Aligns with the left of the container
    zIndex: 1, // Below the main image
  };

  return (
    <Link to={`/reference/${reference.id}`} style={{ textDecoration: 'none', color: 'black' }}>
      <Stack spacing={1.5} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        mt: 2,
        '&:hover': {
          cursor: 'pointer',
          '& .before-image': {
            transform: 'translateX(16%) translateY(-20%) scale(.9) rotate(8deg)',
            //transform: 'translateY(-22%) scale(.92)',
          },
          '& .after-image': {
            transform: 'translateX(10%) translateY(-12%) scale(.92) rotate(5deg)',
          //transform: 'translateY(-14%) scale(.95)',
          },
        },
        }}>
        <Box sx={imgContainerStyle}>
          {/* Main Image */}
          <img src={reference.images[0].src} alt="Main Image" style={imgStyle} className='main-image' loading="lazy" />

          {/* Before and After Images */}
          <img src={reference.images[2].src} alt="Before Image" style={beforeAfterStyle} className="before-image" loading="lazy" />
          <img src={reference.images[1].src} alt="After Image" style={beforeAfterStyle} className="after-image" loading="lazy" />
        </Box>
        <Typography sx={{ fontSize: 20 }}>
          {reference.title}
        </Typography>
        <Divider sx={{ width: '80%' }} />
        <Typography >
          {reference.description}
        </Typography>
      </Stack>
    </Link>
  )
}

export default ReferencesBox;

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import ReferencesBox from './ReferenceBox';
import img1 from '/img1.png.webp'
import img2 from '/img2.jpg.webp'
import img3 from '/img3.png.webp'
import img4 from '/img4.png.webp'

const References = () => {
  const isMobile = useMediaQuery('(max-width: 900px)')

  return (
    <Stack spacing={6.5} sx={{ 
        my: 25,
        mx: 5,
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
      <Typography variant='h3'>
        References
      </Typography>
      <Divider sx={{ mx: '4rem', width: '75%'}} />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '5rem',
        mx: isMobile ? 5 : 10,
        }}>
        {references.map((reference, index) => (
          <ReferencesBox key={index} reference={reference} />
        ))}  
      </Box>
    </Stack>
  )
}

export default References

const references = [
  {
    title: 'Firma',
    description: 'Lorem ipsum dolor sit amet',
    images: [
      {
        src: img2,
        alt: 'reference 1'
      },
      {
        src: img3,
        alt: 'reference 2'
      },
      {
        src: img4,
        alt: 'reference 3'
      },
      {
        src: img1,
        alt: 'reference 4'
      }
    ]
  },
  {
    title: 'Firma',
    description: 'Lorem ipsum dolor sit amet',
    images: [
      {
        src: img3,
        alt: 'reference 1'
      },
      {
        src: img4,
        alt: 'reference 2'
      },
      {
        src: img1,
        alt: 'reference 3'
      },
      {
        src: img2,
        alt: 'reference 4'
      }
    ]
  },
  {
    title: 'Firma',
    description: 'Lorem ipsum dolor sit amet.',
    images: [
      {
        src: img1,
        alt: 'reference 1'
      },
      {
        src: img4,
        alt: 'reference 2'
      },
      {
        src: img2,
        alt: 'reference 3'
      },
      {
        src: img3,
        alt: 'reference 4'
      }
    ]
  },
  {
    title: 'Weddings',
    description: 'Lorem ipsum dolor sit amet.',
    images: [
      {
        src: img2,
        alt: 'reference 1'
      },
      {
        src: img1,
        alt: 'reference 2'
      },
      {
        src: img3,
        alt: 'reference 3'
      },
      {
        src: img4,
        alt: 'reference 4'
      }
    ]
  },
  {
    title: 'Ocean',
    description: 'Lorem ipsum dolor sit amet.',
    images: [
      {
        src: img4,
        alt: 'reference 1'
      },
      {
        src: img3,
        alt: 'reference 2'
      },
      {
        src: img1,
        alt: 'reference 3'
      },
      {
        src: img2,
        alt: 'reference 4'
      }
    ]
  },
  {
    title: 'Nature',
    description: 'Lorem ipsum dolor sit amet.',
    images: [
      {
        src: img3,
        alt: 'reference 1'
      },
      {
        src: img2,
        alt: 'reference 2'
      },
      {
        src: img1,
        alt: 'reference 3'
      },
      {
        src: img4,
        alt: 'reference 4'
      }
    ]
  },

]
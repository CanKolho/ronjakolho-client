import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import ReferencesBox from './ReferenceBox';
import { portfolio } from '../portfolio.js'

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
        {portfolio.map((reference, index) => (
          <ReferencesBox key={index} reference={reference} />
        ))}  
      </Box>
    </Stack>
  )
}

export default References

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import Motion from './motion/motion.jsx'
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
        <Motion direction='down'>
          Portfolio
        </Motion>
      </Typography>

      <Motion index={1} direction='down'>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Divider sx={{ mx: '4rem', width: '75vw'}} />
        </Box>
      </Motion>
      
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
          <Motion 
            key={index} 
            index={isMobile ? 0 : index} 
            direction={isMobile ? 'up' : index % 2 === 0 ? 'up' : 'down'}
          >
            <ReferencesBox key={index} reference={reference} />
          </Motion>
        ))}  
      </Box>
    </Stack>
  )
}

export default References

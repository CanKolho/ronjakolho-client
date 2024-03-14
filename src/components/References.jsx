import { useMemo } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@mui/material';
import Motion from './motion/motion.jsx'
import ReferencesBox from './ReferenceBox';
import { portfolio } from '../portfolio.js'

const References = () => {
  const isMobile = useMediaQuery('(max-width: 900px)')
  // Reducing js execution time by using useMemo
  const imagePortfolio = useMemo(() => portfolio, [])

  return (
    <Stack spacing={6.5} sx={{ 
        my: 20,
        mx: 5,
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile  ? '2rem' : '5rem',
        mx: isMobile ? 5 : 10,
        }}>
        {imagePortfolio.map((reference, index) => (
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

import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';
import img from '/me.jpeg'
import '../styles/about.css'

import { useMediaQuery } from '@mui/material';

const About = () => {
  const socials = [
    { icon: 'fa-brands fa-facebook' },
    { icon: 'fa-brands fa-twitter' },
    { icon: 'fa-brands fa-linkedin' },
    { icon: 'fa-brands fa-instagram' }
  ]

  const isMobile = useMediaQuery('(max-width: 1100px)');

  return (
    <Box mt={20} mb={10}  sx={{
      display: 'flex', 
      justifyContent: 'space-evenly',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      gap: isMobile ? '3rem' : '2rem',
      mx: 5
    }}>
      <img className='aboutPic' src={img} alt="random" />
      <Box sx={{ 
          display: 'flex',
          flexDirection: 'column', 
          backgroundColor: '#fafafa',
          padding: '1rem',
          borderRadius: '10px',
        }}> 
        <Typography variant="h5" sx={{ my: 2}}>
          Ronja Kolho
        </Typography>
        <Typography mb={4} sx={{ fontSize: 17}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Box>
          <ul className="socials">
          {socials.map((social, index) => (
            <li key={index}>
              <a href='#'>
                <i className={social.icon}></i>
              </a>
            </li>
          ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
}

export default About
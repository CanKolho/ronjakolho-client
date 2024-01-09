import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';
import MyImage from './LazyLoad/MyImage.jsx'
import img from '../assets/me.jpeg'
import '../styles/About.css'

import Motion from './motion/motion.jsx'
import { useMediaQuery } from '@mui/material';

const About = () => {
  const socials = [
    { icon: 'fa-brands fa-linkedin', anchor: 'https://fi.linkedin.com/in/ronjakolho' },
    { icon: 'fa-brands fa-instagram', anchor: 'https://www.instagram.com/ronjajjulia?igsh=MTQxYmpweHFsNXh3bw==' }
  ]

    const isMobile = useMediaQuery('(max-width: 1100px)');

  return (
    <Motion direction='down'>
      <Box mt={20} mb={10}  sx={{
          display: 'flex', 
          justifyContent: 'space-evenly',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: isMobile ? '3rem' : '2rem',
          mx: 5
        }}>

        <MyImage image={{ 
            src: img, 
            alt: 'me, Ronja', 
            className: 'aboutPic' 
            }} 
        />
        
        <Box sx={{ 
            display: 'flex',
            flexDirection: 'column', 
            backgroundColor: '#fafafa',
            padding: '1rem',
            borderRadius: '10px',
            width: isMobile ? '85vw' : '50%',
          }}>
            <Motion index={2} direction='down'>
              <Typography variant="h5" sx={{ my: 2 }}>
                About me
              </Typography>
            </Motion>
          <Motion index={3} direction='down'>
            <Typography mb={4} sx={{ fontSize: 17}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Motion>
          <Box>
            <ul className="socials">
            {socials.map((social, index) => (
              <li key={index}>
                <Motion index={index+2} direction='down'>
                  <a href={social.anchor}>
                    <i className={social.icon}></i>
                  </a>
                </Motion>
              </li>
            ))}
            </ul>
          </Box>
        </Box>
      </Box>
    </Motion>
  );
}

export default About
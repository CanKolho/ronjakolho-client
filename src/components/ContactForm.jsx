import '../styles/ContactForm.css';
import { useState, useCallback } from 'react';
import { useField } from '../hooks';
import { TextField, Button, Typography, Box } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import FloatingPictures from './FloatingPictures';
import Motion from './motion/motion.jsx'
import emailService from '../services/email.js';

const ContactForm = () => {
  const { reset: resetName, ...name } = useField('text')
  const { reset: resetEmail, ...email } = useField('email')
  const { reset: resetMessage, ...message } = useField('text')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const emailObject = {
      name: name.value,
      email: email.value,
      message: message.value
    }

    try {
      await emailService.sendEmail(emailObject)
      setSuccess(true) 
      resetName();
      resetEmail();
      resetMessage();
    } catch (error) {
      console.error('Failed to send email:', error)
      setError(true);
    }

    setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 7000);
  }, []);

  return (
    <>
      <Motion direction='down'>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}>
          <Box
            sx={{
              maxWidth: 600,
              mx: 1.5,
              p: 2,
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "1px solid rgb(196, 195, 195)", 
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography variant="h4" align="center" mb={2}>
              Contact Me
            </Typography>

            { success && <Alert severity="success">
              We have received your message and will get back to you soon!
            </Alert>}

            { error && <Alert severity="error">
              An error occurred while sending your message. Please try again.
            </Alert>}

            <form onSubmit={handleSubmit}>
              <TextField
                {...name}
                fullWidth
                label="Name"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                {...email}
                label="Email"
                margin="normal"
                required
                type="email"
              />
              <TextField
                fullWidth
                {...message}
                label="Message"
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  mt: 2,
                  display: "block",
                  margin: "0 auto",
                  backgroundColor: '#DED0B6',
                  "&:hover": {
                    backgroundColor: '#BBAB8C',
                  },
                }}
              >
                Send 
                <SendIcon fontSize="small" sx={{ ml: 1, verticalAlign: 'middle' }} />
              </Button>
            </form>
          </Box>
        </Box>
      </Motion>
      <FloatingPictures />
    </>
  );
}

export default ContactForm;

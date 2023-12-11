import '../styles/ContactForm.css';
import { useField } from '../hooks';
import { TextField, Button, Typography, Box } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FloatingPictures from './FloatingPictures';

const ContactForm = () => {
  const { reset: resetName, ...name } = useField('text')
  const { reset: resetEmail, ...email } = useField('email')
  const { reset: resetMessage, ...message } = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()

    resetName()
    resetEmail()
    resetMessage()
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          overflowX: 'hidden',
          
        }}
      >
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
                backgroundColor: '#c2185b',
                "&:hover": {
                  backgroundColor: '#880e4f',
                },
              }}
            >
              Send 
              <SendIcon fontSize="small" sx={{ ml: 1, verticalAlign: 'middle' }} />
            </Button>
          </form>
        </Box>
      </Box>
      <FloatingPictures />
    </>
  );
}

export default ContactForm;

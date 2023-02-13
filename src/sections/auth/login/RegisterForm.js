import { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
// @mui
import { Stack, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
// import { Link } from 'react-router-dom'
import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../../firebase';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/login');
  }
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  // const handleClick = () => {
  //   navigate('/dashboard', { replace: true });
  // };

  const onSubmit = async (e) => {
    e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate('/login', { replace: true });
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
      });
  }

  return (
    <>    
      <Stack spacing={3}>
        <TextField name="text" label="Email" 
           value={email}
           onChange={(e) => setEmail(e.target.value)} 
           required       
        />
        {/* <TextField name="text" label="Account Number" /> */}
        <TextField
          name="password"
          label="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)} 
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* <TextField
          name="password"
          label="Reenter Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}
      </Stack>
      
      <LoadingButton sx={{ mt: 5 }} fullWidth size="large" type="submit" variant="contained" onClick={onSubmit}>
        Create Account
      </LoadingButton>
        
      <Typography variant="body2" sx={{ mt: 5 }} align="center">
        Already have an account? {''}
        <Link to="/login">Login</Link>
      </Typography>
    </>
  );
}

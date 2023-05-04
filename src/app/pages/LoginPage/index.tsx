import { Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';

export const LoginPage = props => {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login Page for Davies Fashion" />
      </Helmet>
      <Container></Container>
    </>
  );
};

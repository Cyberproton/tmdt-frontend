/* eslint-disable prettier/prettier */
import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { DesignBreadcrumbs } from './components/DesignBreadcrumb';
//import Payment from './Payment';


export function Checkout() {
    return (
        <>
    <Helmet>
        <title>Thanh toán</title>
        <meta
          name="description"
          content="Thanh toán"
        />
    </Helmet>
    <Container>
        <Box my={3}>
          <Box mt={3}>
            <DesignBreadcrumbs />
          </Box>
          <Box mt={4} mb={6}>
            
          </Box>
        </Box>
      </Container>
    </>
    );
  }
  
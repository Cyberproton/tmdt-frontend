import { Box, Container } from '@mui/material';
import { CheckoutBreadcrumbs } from './components/CheckoutBreadcrumbs';

export const CheckoutPage = props => {
  return (
    <Container>
      <Box my={3}>
        <Box mt={3} mb={6}>
          <CheckoutBreadcrumbs />
        </Box>
      </Box>
    </Container>
  );
};

import React from 'react';
import Edit from './Edit';
import './index.css';
import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { DesignBreadcrumbs } from './componens/DesignBreadcrumb';

export function DesignPage() {
  return (
    <>
      <Helmet>
        <title>Thông tin</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Container>
        <Box my={3}>
          <Box mt={3}>
            <DesignBreadcrumbs />
          </Box>
          <Box mt={4} mb={6}>
            <Edit />
          </Box>
        </Box>
      </Container>
    </>
  );
}

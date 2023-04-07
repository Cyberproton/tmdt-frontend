import { Typography } from '@mui/material';
import { PageWrapper } from 'app/components/PageWrapper';
import { Helmet } from 'react-helmet-async';
import { Masthead } from './Masthead';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <PageWrapper>
        <Masthead />
      </PageWrapper>
    </>
  );
}

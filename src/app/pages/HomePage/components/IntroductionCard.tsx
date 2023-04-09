import { NavigateNext } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import IntroductionImage from 'assets/introduction.png';
import Image from 'mui-image';
import { useNavigate } from 'react-router-dom';

const primaryBlack = createTheme({
  palette: { primary: { main: '#111111' }, secondary: { main: '#FFFFFF' } },
});

export const IntroductionCard = () => {
  const navigate = useNavigate();
  const borderRadius = '16px';
  const height = 400;

  return (
    <Box
      sx={{ border: 1, borderRadius: borderRadius, borderColor: 'lightgray' }}
    >
      <Grid container height={height}>
        <Grid item xs={6}>
          <Box
            bgcolor={'#EBF3FF'}
            height={height}
            p={3}
            sx={{
              borderTopLeftRadius: borderRadius,
              borderBottomLeftRadius: borderRadius,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Box mb={2}>
                <Typography variant="h4" fontWeight={'bold'}>
                  Mang đến cho bạn trải nghiệm tuyệt vời nhất
                </Typography>
              </Box>

              <Typography color={'dimgray'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>
            <Box
              my={1}
              sx={{
                display: 'flex',
                gap: 2,
              }}
            >
              <ThemeProvider theme={primaryBlack}>
                <Button
                  variant="contained"
                  onClick={() => navigate('/products')}
                >
                  <NavigateNext color={'secondary'} />
                  Mua Ngay
                </Button>
              </ThemeProvider>
              <Link href="#contact-us">
                <Button variant="contained">Liên hệ với chúng tôi</Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            height={height}
            sx={{
              borderTopRightRadius: borderRadius,
              borderBottomRightRadius: borderRadius,
            }}
          >
            <Image
              src={IntroductionImage}
              alt="Promotional Product"
              fit="cover"
              easing="linear"
              duration={1000}
              style={{ borderRadius: '0 16px 16px 0' }}
            ></Image>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

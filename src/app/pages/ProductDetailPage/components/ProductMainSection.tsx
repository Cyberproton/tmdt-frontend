import {
  Box,
  Button,
  Divider,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import Image from 'mui-image';
import { ProductMainSectionProps } from '../types';
import { ProductMainSectionName } from './ProductMainSectionName';
import { ProductMainSectionOptions } from './ProductMainSectionOptions';
import { ProductMainSectionPrice } from './ProductMainSectionPrice';

const primaryBlack = createTheme({
  palette: { primary: { main: '#111111' }, secondary: { main: '#FFFFFF' } },
});

export const ProductMainSection = (props: ProductMainSectionProps) => {
  const borderRadius = '16px';
  const height = 460;
  const product = props.product;

  return (
    <Box
      sx={{ border: 1, borderRadius: borderRadius, borderColor: 'lightgray' }}
    >
      <Grid container height={height}>
        <Grid item xs={4}>
          <Box
            height={height}
            sx={{
              borderTopRightRadius: borderRadius,
              borderBottomRightRadius: borderRadius,
            }}
          >
            <Image
              src={product.image}
              alt="Promotional Product"
              fit="cover"
              easing="linear"
              duration={1000}
              style={{ borderRadius: `${borderRadius} 0 0 ${borderRadius}` }}
            ></Image>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box p={3}>
            <ProductMainSectionName product={product} />
            <Box mt={1} mb={2}>
              <Divider />
            </Box>
            <ProductMainSectionPrice product={product} />
            <Box mt={2} mb={2}>
              <Divider />
            </Box>
            <ProductMainSectionOptions product={product} />
            <Box
              sx={{
                display: 'flex',
              }}
              my={6}
              gap={3}
            >
              <ThemeProvider theme={primaryBlack}>
                <Button variant="contained">
                  <Typography variant="subtitle1" fontWeight={'medium'}>
                    Mua ngay
                  </Typography>
                </Button>
              </ThemeProvider>

              <Button variant="contained">
                <Typography variant="subtitle1" fontWeight={'medium'}>
                  Thêm vào giỏ hàng
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

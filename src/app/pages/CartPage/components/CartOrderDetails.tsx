import {
  Box,
  Button,
  Divider,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { CartOrderDetailsProps } from '../types';

const primaryBlack = createTheme({
  palette: { primary: { main: '#111111' } },
});

export const CartOrderDetails = (props: CartOrderDetailsProps) => {
  const price = props.cartItems.reduce(
    (acc, item) =>
      acc + (item.price - item.price * item.discount) * item.quantity,
    0,
  );
  const shippingFee = 30000;
  return (
    <Box
      p={4}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: 1,
        borderColor: 'lightgray',
        borderRadius: '16px',
        gap: 2,
      }}
    >
      <Typography variant="h5" mb={4}>
        Thông tin đơn hàng
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Typography color={'dimgray'} flexGrow={1}>
          Tạm tính
        </Typography>
        <Typography>{price.toLocaleString()}đ</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography color={'dimgray'} flexGrow={1}>
          Phí vận chuyển
        </Typography>
        <Typography>{shippingFee.toLocaleString()}đ</Typography>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography flexGrow={1} fontWeight={'bold'}>
          Tổng tiền
        </Typography>
        <Typography variant="h6" color={'error'} fontWeight={'bold'}>
          {(price + shippingFee).toLocaleString()}đ
        </Typography>
      </Box>
      <ThemeProvider theme={primaryBlack}>
        <Button sx={{ mt: 2 }} variant="contained">
          Thanh toán đơn hàng
        </Button>
      </ThemeProvider>
    </Box>
  );
};

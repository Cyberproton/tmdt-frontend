/* eslint-disable prettier/prettier */
import { Button } from '@mui/material';
import { CartItemType } from '../AppCart';
import CartItem from '../CartItem/CartItem';
import { DesignBreadcrumbs } from '../DesignBreadcrumb';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@mui/material';
import { Wrapper } from './Cart.styles';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart = ({ cartItems, addToCart, removeFromCart }: Props) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  return (
    <>
      <Helmet>
        <title>Giỏ hàng của tôi</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Container>
        <Box>
          <DesignBreadcrumbs />
        </Box>
      </Container>
      <Wrapper>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? <p>No items in cart.</p> : null}
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
        <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      </Wrapper>
    </>
  );
};

export default Cart;

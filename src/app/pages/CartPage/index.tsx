import { Box, Container, Grid } from '@mui/material';
import { useState } from 'react';
import { CartItemGroup, CartOrderDetails } from './components';
import { CartBreadcrumbs } from './components/CartBreadcrumbs';
import {
  addCartItem,
  clearCartItems,
  getCartItems,
  removeCartItem,
  subtractCartItem,
} from './data';
import { CartItem } from './types';

export const CartPage = props => {
  const [items, setItems] = useState(getCartItems());

  const removeItem = (item: CartItem) => {
    removeCartItem(item);
    setItems(getCartItems());
  };
  const addItem = (item: CartItem) => {
    addCartItem(item);
    setItems(getCartItems());
  };
  const subtractItem = (item: CartItem) => {
    subtractCartItem(item);
    setItems(getCartItems());
  };
  const clearItem = () => {
    clearCartItems();
    setItems([]);
  };

  return (
    <Container>
      <Box my={3}>
        <Box mt={3} mb={6}>
          <CartBreadcrumbs />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <CartItemGroup
              cartItems={items}
              removeCartItem={removeItem}
              addCartItem={addItem}
              subtractCartItem={subtractItem}
              clearCartItems={clearItem}
            />
          </Grid>
          <Grid item xs={4}>
            <CartOrderDetails cartItems={items} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

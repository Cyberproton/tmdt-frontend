import { More, PersonRounded, ShoppingBagRounded } from '@mui/icons-material';
import { AppBar, Badge, Box, IconButton, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { NavigationButton, NavigationIconButton } from '../NavigationButton';
import { DevisLogo } from './DevisLogo';
import { SearchBar } from './SearchBar';

export function NavBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => navigate('/')}
          >
            <DevisLogo />
          </IconButton>
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            <NavigationButton path="/">Trang Chủ</NavigationButton>
            <NavigationButton path="/products">Sản phẩm</NavigationButton>
            <NavigationButton path="/design">Thiết kế áo</NavigationButton>
            <NavigationIconButton path="/cart">
              <Badge badgeContent={4} color="error">
                <ShoppingBagRounded fontSize="large" />
              </Badge>
            </NavigationIconButton>
            <NavigationIconButton path="/user">
              <PersonRounded fontSize="large" />
            </NavigationIconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <More />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

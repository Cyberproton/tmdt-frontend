/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { useTranslation } from 'react-i18next';
import { NavBar } from './components/NavBar';
import { CartPage } from './pages/CartPage';
import { DesignPage } from './pages/DesignPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProductPage } from './pages/ProductPage';
import { UserPage } from './pages/UserPage';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

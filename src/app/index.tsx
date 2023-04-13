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
import AppCart from './pages/CartPage/AppCart';
import { Checkout } from './pages/CheckoutPage/Checkout';
import { DesignPage } from './pages/DesignPage';
import { General } from './pages/General';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProductPage } from './pages/ProductPage';

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
        <Route path="/cart" element={<App />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/general" element={<General value={0} />} />
        <Route path="/general/support" element={<General value={1} />} />
        <Route
          path="/general/policy/:page"
          element={<General page={0} value={2} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

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
import { PageWrapper } from 'app/components/PageWrapper';
import { CartPage } from './pages/CartPage';
import { DesignPage } from './pages/DesignPage';
import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { NavBar } from './components/NavBar';
import { ActiveLastBreadcrumb } from './components/ActiveLastBreadcrumb';
import { General } from './pages/General';

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
      <PageWrapper>
        <ActiveLastBreadcrumb />
      </PageWrapper>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/general" element={<General value={0} />} />
        <Route path="/general/support" element={<General value={1} />} />
        <Route path="/general/policy" element={<General value={2} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

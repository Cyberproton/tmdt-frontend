import { Col, Row } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';
import storeItems from '../data/items.json';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';
import { DesignBreadcrumbs } from '../components/DesignBreadcrumb';
import { Helmet } from 'react-helmet-async';

export function MyCart() {
  return (
    <>
    <Helmet>
        <title>Thông tin</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
    </Helmet>
      <h1>Giỏ hàng</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <ShoppingCartProvider>
              <StoreItem {...item} />
            </ShoppingCartProvider>
          </Col>
        ))}
      </Row>
    </>
  );
}

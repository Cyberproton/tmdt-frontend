import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Masthead } from './../HomePage/Masthead';
import { PageWrapper } from 'app/components/PageWrapper';
import styled from 'styled-components/macro';

export function General() {
  const [page, setPage] = React.useState(0);
  const handleChange = value => {
    setPage(value);
  };
  return (
    <>
      <Helmet>
        <title>General</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <PageWrapper>
        {/* Tab Link */}
        <Wrapper>
          <Button value={0}>Thông tin</Button>
          <Button value={1}>Hỗ trợ trực tuyến</Button>
          <Button value={2}>Các chính sách</Button>
          <Button>Đăng xuất</Button>
        </Wrapper>
        {/* Tab Content */}
        <Box>Hello World</Box>
      </PageWrapper>
    </>
  );
}

const Wrapper = styled.main`
  height: 60vh;
  width: 30vh;
  flex-direction: column;
  padding-top: 100px;
  min-height: 320px;
  position: absolute;
`;

const Button = styled.button`
  margin-bottom: 20px;
`;

const Box = styled.div`
  position: absolute;
  float: left;
  background-color: #ffffff;
  border-radius: 17px;
  border: 1px solid #000000;
`;

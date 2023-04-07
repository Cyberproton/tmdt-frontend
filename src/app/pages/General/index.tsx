import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, ThemeProvider, createTheme } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Account from './Account';
import { Support } from './Support';
import { Policy } from './Policy';
import Divider from '@mui/material/Divider';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const secondaryGray = createTheme({
  palette: { secondary: { main: '#333333' } },
});

const TabLink = props => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const path = props.path;

  return <ThemeProvider theme={secondaryGray}></ThemeProvider>;
};

export function General(props) {
  const [page, setPage] = React.useState(props.value);
  const handleChangePage = value => {
    setPage(value);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                  borderRight: 1,
                  borderColor: 'divider',
                  alignContent: 'start',
                }}
              >
                <Tab label="Thông tin" {...a11yProps(0)} />
                <Tab label="Hỗ trợ trực tuyến" {...a11yProps(1)} />
                <Tab label="Chính sách" {...a11yProps(2)} />
                <Tab label="Đăng xuất" {...a11yProps(3)} />
              </Tabs>
            </Grid>
            {/* <Grid item xs={0} /> */}
            <Grid item xs={9}>
              <Card
                sx={{
                  flexGrow: 1,
                  bgcolor: 'background.paper',
                  display: 'flex',
                  // border: '1px solid black',
                }}
              >
                <TabPanel value={value} index={0}>
                  <Account />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Support />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Policy />
                </TabPanel>
                <TabPanel value={value} index={3}>
                  Đăng xuất
                </TabPanel>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </PageWrapper>
    </>
  );
}

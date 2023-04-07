import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Divider } from '@mui/material';
import { Baomat } from './components/Baomat';
import { Vanchuyen } from './components/Vanchuyen';
import { Thanhtoan } from './components/Thanhtoan';
import { Doitra } from './components/Doitra';

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

export function Policy() {
  const [value, setValue] = React.useState(0);

  const policy = [<Baomat />, <Vanchuyen />, <Doitra />, <Thanhtoan />];

  const handleChange = newValue => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        width: 700,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {policy[value]}
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={3.5}>
          <Button
            onClick={() => handleChange(0)}
            sx={{ textTransform: 'none' }}
          >
            Chính sách bảo mật
          </Button>
          <Button
            sx={{ textTransform: 'none' }}
            onClick={() => handleChange(1)}
          >
            Chính sách vận chuyển
          </Button>
          <Button
            sx={{ textTransform: 'none' }}
            onClick={() => handleChange(2)}
          >
            Chính sách đổi trả
          </Button>
          <Button
            sx={{ textTransform: 'none' }}
            onClick={() => handleChange(3)}
          >
            Chính sách thanh toán
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

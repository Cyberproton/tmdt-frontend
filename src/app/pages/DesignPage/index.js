import { Typography } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import Edit from './Edit';
import * as serviceWorker from './serviceWorker';
import './index.css';

export const DesignPage = props => {
  return (
    <Typography variant="h3">
      {' '}
      <Edit />{' '}
    </Typography>
  );
};

import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import Header from './components/Header';
import NavDrawer from './components/NavDrawer';
import Router from './routes';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex'
    }
  })
);

const App: React.VFC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <NavDrawer />
      <Router />
    </div>
  );
};

export default App;

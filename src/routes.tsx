import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Toolbar, makeStyles, Theme, createStyles } from '@material-ui/core';

import AssociacaoPage from './pages/AssociacaoPage';

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

const Router: React.VFC = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Toolbar />
      <BrowserRouter>
        <Switch>
          <Route path="/associacao" component={AssociacaoPage} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default Router;

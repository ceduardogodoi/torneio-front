import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    }
  })
);

const Header: React.FC = () => {
  const classes = useStyles();

  const handleClickLogout = () => alert('Deslogando-se');

  // Criar AppBar com Nome do Usuário Logado e Logout
  return (
    <AppBar
      position="fixed"
      color="primary"
      variant="outlined"
      className={classes.appBar}
    >
      <Toolbar>
        <Typography component="span">Usuário</Typography>
        <Box flexGrow={1} />
        <Button color="inherit" onClick={handleClickLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

//MUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff',
  },
  navLink: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar>
        <Typography variant='h6' className={classes.navLink}>
          <Link to='/'>Home</Link>
        </Typography>
        <Typography variant='h6' className={classes.navLink}>
          <Link to='/new-post'>New Post</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

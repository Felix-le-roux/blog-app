import React from 'react';
import { Link } from 'react-router-dom';

//MUI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  errorContainer: {
    minHeight: '85vh',
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.12)',
  },
  backLink: {
    marginTop: theme.spacing(3),
  },
}));

const Error = () => {
  const classes = useStyles();

  return (
    <Container className={classes.errorContainer}>
      <Typography variant='h4'>Error Page</Typography>
      <Button className={classes.backLink}>
        <Typography variant='h5'>
          <Link to='/'>Back Home</Link>
        </Typography>
      </Button>
    </Container>
  );
};

export default Error;

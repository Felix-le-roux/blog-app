import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';

//MUI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    color: '#000',
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  postTitle: {
    color: '#000',
  },
  postDesc: {
    height: '100px',
  },
  card: {
    maxWidth: '100%',
  },
}));

const Home = () => {
  const classes = useStyles();
  const { data } = useGlobalContext();

  return (
    <Container maxWidth='lg' className={classes.blogsContainer}>
      <Typography variant='h4' className={classes.blogTitle}>
        Articles
      </Typography>
      <Grid container spacing={3}>
        {data.map((post) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card variant='outlined' className={classes.card}>
                <CardContent>
                  <Typography variant='h5' className={classes.postTitle}>
                    {post.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    component='p'
                    className={classes.postDesc}
                  >
                    {post.desc.length < 200
                      ? post.desc
                      : `${post.desc.substring(0, 200)}...`}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button>
                    <Link to={`/post/${post.id}`} color='inherit'>
                      Read More
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Home;

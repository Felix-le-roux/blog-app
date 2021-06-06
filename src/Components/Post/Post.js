import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';

//MUI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  postContainer: {
    minHeight: '85vh',
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.12)',
  },
  postTitle: {
    marginTop: theme.spacing(6),
    fontWeight: 800,
  },
  postDesc: {
    marginTop: theme.spacing(3),
  },
  backLink: {
    marginTop: theme.spacing(6),
  },
}));

const Post = () => {
  const classes = useStyles();

  const [post, setPost] = useState({});
  const { data } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    const newPost = data.find((post) => post.id === parseInt(id));
    newPost && setPost(newPost);
  }, [data, id]);

  return (
    <Container maxWidth='lg' className={classes.postContainer}>
      <Typography variant='h4' className={classes.postTitle}>
        {post && post.title}
      </Typography>
      <Typography variant='body1' component='p' className={classes.postDesc}>
        {post && post.desc}
      </Typography>
      <Button className={classes.backLink}>
        <Typography variant='h5'>
          <Link to='/'>Back Home</Link>
        </Typography>
      </Button>
    </Container>
  );
};

export default Post;

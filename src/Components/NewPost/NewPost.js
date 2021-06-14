import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useGlobalContext } from '../../context/context';

//MUI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  newPostContainer: {
    position: 'relative',
    minHeight: '85vh',
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.12)',
  },
  newPost: {
    marginTop: theme.spacing(3),
    fontWeight: 800,
  },
  newPostForm: {
    width: '100%',
  },
  titleInput: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  deskInput: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submitBtn: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
}));

const schema = yup.object().shape({
  title: yup.string().required(),
  desc: yup.string().required(),
});

const NewPost = () => {
  const classes = useStyles();
  const history = useHistory();

  const { data, addPost } = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (post) => {
    const newItem = { id: data.length + 1, ...post };
    addPost(newItem);
    history.push('/');
  };

  return (
    <Container maxWidth='lg' className={classes.newPostContainer}>
      <Typography variant='h4' className={classes.newPost}>
        New Post
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.newPostForm}>
        <div>
          <TextField
            error={errors.title ? true : false}
            id='outlined-basic'
            label='Title'
            variant='outlined'
            {...register('title', { required: true })}
            type='text'
            autoComplete='off'
            className={classes.titleInput}
          />
        </div>
        <div>
          <TextField
            error={errors.desc ? true : false}
            id='outlined-multiline-static'
            label='Description'
            multiline
            rows={12}
            variant='outlined'
            {...register('desc', { required: true })}
            type='text'
            autoComplete='off'
            className={classes.deskInput}
          />
        </div>
        <Button
          variant='outlined'
          color='primary'
          type='submit'
          className={classes.submitBtn}
        >
          Add
        </Button>
      </form>
    </Container>
  );
};

export default NewPost;

import React from 'react';

//react-router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './Components/Home/Home';
import Post from './Components/Post/Post';
import NewPost from './Components/NewPost/NewPost';
import Error from './Components/Error/Error';

// navbar
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/post/:id' children={<Post />}></Route>
        <Route path='/new-post'>
          <NewPost />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

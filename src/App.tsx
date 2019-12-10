import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'

import {Top} from './Top/TopPage';
import {Watch} from './Watch/WatchPage';
import {Search} from './Search/SearchPage';

import { Container, Grid, Box } from '@material-ui/core';
import queryString from 'query-string';



const App: React.FC = () => {
  return (
    <>
      <Header />
        <Container maxWidth="lg">
          <Grid container justify="center">
            <Grid item>
              <Box m={10} />

              <Switch>
                <Route exact path="/" component={Top} />
                <Route path="/watch">
                  <Watch />
                </Route>
                <Route path="/search">
                  <Search />
                </Route>
              </Switch>

            </Grid>
          </Grid>
        </Container>
      <Footer />
    </>
  );
}

export default App;

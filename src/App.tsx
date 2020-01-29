import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'

import {Top} from './Top/TopPage';
import {Watch} from './Watch/WatchPage';
import {WatchModal} from './Watch/WatchModal';
import {Search} from './Search/SearchPage';
import {Editor} from './Editor/Editor'
import {Auth} from './Auth/Auth'

import { Container, Grid, Box } from '@material-ui/core';
import { MyPage } from './MyPage/MyPage';

//Modal.setAppElement('#root')

const App: React.FC = () => {
  let location = useLocation()
  let background = location.state && location.state.background

  return (
    <>
      <Header />
        <Container maxWidth="lg">
          <Grid container justify="center">
            <Grid item>
              <Box m={10} />

              <Switch location={background || location}>
                <Route exact path="/" component={Top} />
                <Route path="/watch/:id">
                  <Watch tagType={"movie"}/>
                </Route>
                <Route path="/search">
                  <Search />
                </Route>
                <Route path="/registration">
                  <Editor />
                </Route>
                <Route path="/mypage">
                  <MyPage />
                </Route>
                <Route path="/auth">
                  <Auth />
                </Route>
              </Switch>

              {background && <Route path="/watch/:id" children={<WatchModal />} />}

            </Grid>
          </Grid>
        </Container>
      <Footer />
    </>
  );
}

export default App;

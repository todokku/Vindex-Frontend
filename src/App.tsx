import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'

import {Top} from './Top/TopPage';
import {Watch} from './Watch/WatchPage';
import {Search} from './Search/SearchPage';



const App: React.FC = () => {
  return (
    <>
      <Header />
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/watch" component={Watch} />
          <Route exact path="/search" component={Search} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;

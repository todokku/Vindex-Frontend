import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import {Top} from './Top/TopPage';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Top} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

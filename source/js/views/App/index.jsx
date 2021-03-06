import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from 'views/Home';
import Portal from 'views/Portal';
import Forms from 'views/Forms';
import Faqs from 'views/FAQs';
import Courthouse from 'views/Courthouse';
import Contact from 'views/Contact';
import NotFound from 'views/NotFound';
import Menu from 'components/Global/Menu';
import Search from 'components/Global/Search'

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
  PORTAL: `${ publicPath }portal`,
  FORMS: `${ publicPath }forms`,
  FAQS: `${ publicPath }faqs`,
  COURTHOUSE: `${ publicPath }courthouse`,
  CONTACT: `${ publicPath }contact`,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='App-mask'></div>
          <Menu />
          <Search />
          <div className='Page'>
            <Switch>
              <Route exact path={ publicPath } component={ Home } />
              <Route path={ routeCodes.PORTAL } component={ Portal } />
              <Route path={ routeCodes.FORMS } component={ Forms } />
              <Route path={ routeCodes.FAQS } component={ Faqs } />
              <Route path={ routeCodes.COURTHOUSE } component={ Courthouse } />
              <Route path={ routeCodes.CONTACT } component={ Contact } />
              <Route path='*' component={ NotFound } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

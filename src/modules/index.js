import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './home';
import Category from './category';
import Search from './search';


export default class NewsFeedApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/category/:categoryName" component={Category}/>
          <Route exact path="/search/:searchValue" component={Search}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

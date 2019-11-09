import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Home from './home';
import Category from './category';
import Search from './search';


export default class NewsFeedApp extends React.Component {
  render() {
    const basename = process.env.NODE_ENV === "production" ? "/ReactJS-News-Feed" : "";

    return (
      <BrowserRouter basename={basename}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/category/:categoryName" component={Category}/>
          <Route exact path="/search/:searchValue" component={Search}/>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

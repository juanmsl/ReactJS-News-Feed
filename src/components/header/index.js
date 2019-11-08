import React from 'react';
import {Form, Input} from "components";
import logo from 'assets/images/logo.png';
import {withRouter} from "react-router-dom";

const Header = ({title, history}) => {

  const search = (state) => {
    const searchValue = state["searchValue"];
    history.push(`/search/${searchValue}`);
  };

  return (
    <header className="aca-header">
      <img src={logo} alt="Logo" className="aca-header__logo"/>
      <h1 className="aca-header__title">{title}</h1>
      <Form onSubmit={search} className="aca-header__form">
        <Input type="search" autoComplete="off" name="searchValue" className="aca-input"/>
      </Form>
    </header>
  );
};

export default withRouter(Header);
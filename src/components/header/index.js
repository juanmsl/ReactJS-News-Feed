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
    <header>
      <img src={logo} alt="Logo"/>
      <h1>{title}</h1>
      <Form onSubmit={search}>
        <Input name="searchValue"/>
      </Form>
    </header>
  );
};

export default withRouter(Header);
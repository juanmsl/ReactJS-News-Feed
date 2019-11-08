import React from 'react';
import {Header, Navbar} from "components";
import {Constants} from "common";

const ContainerHOC = (Children) => (
  class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        navbarItems: [
          {href: "", text: "Home"},
          ...Object.keys(Constants.categories).map((category) => ({
            href: `/category/${category}`, text: Constants.categories[category].label
          }))
        ]
      };
    }

    render() {
      const {navbarItems} = this.state;

      return (
        <main>
          <Header title="News feed"/>
          <Navbar items={navbarItems}/>
          <Children {...this.props}/>
        </main>
      );
    }
  }
);

export default ContainerHOC;
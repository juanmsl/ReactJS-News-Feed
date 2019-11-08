import React from 'react';
import {withRouter} from "react-router-dom";
import {ContainerHOC, RenderCardHOC} from "hocs";
import NProgress from "nprogress";
import API from "api";


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getData = (searchValue) => {
    NProgress.start();
    NProgress.inc();
    console.log(searchValue);
    API.getSearch(searchValue, (response) => {
      NProgress.done();
      this.setState({data: response.data});
      console.log(response);
    });
  };

  componentDidMount() {
    const {searchValue} = this.props.match.params;
    this.getData(searchValue);
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    const {searchValue} = this.props.match.params;
    const {searchValue: prevSearchValue} = prevProps.match.params;
    if (searchValue !== prevSearchValue) {
      this.setState({data: []});
      this.getData(searchValue);
    }
  }

  render() {
    const {data} = this.state;
    const {renderCards} = this.props;

    return (
      <main>
        {renderCards(data)}
      </main>
    );
  }
}

export default RenderCardHOC(ContainerHOC(withRouter(Search)));
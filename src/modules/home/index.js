import React from 'react';
import {withRouter} from "react-router-dom";
import API from "api";
import NProgress from "nprogress";
import moment from "moment";
import {ContainerHOC, RenderCardHOC} from "hocs";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const today = moment().format("YYYY-MM-DD");
    NProgress.start();
    NProgress.inc();
    API.getLatest(today, (response) => {
      NProgress.done();
      this.setState({data: response.data});
    });
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

export default RenderCardHOC(ContainerHOC(withRouter(Home)));
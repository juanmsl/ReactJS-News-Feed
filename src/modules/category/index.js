import React from 'react';
import {withRouter} from "react-router-dom";
import NProgress from "nprogress";
import API from "api";
import {Constants} from "common";
import {ContainerHOC, RenderCardHOC} from "hocs";
import {Paginator} from "components";


class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getData = (categoryId) => {
    NProgress.start();
    NProgress.inc();
    API.getCategory(categoryId, (response) => {
      NProgress.done();
      this.setState({data: response.data});
    });
  };

  componentDidMount() {
    const {categoryName} = this.props.match.params;
    const categoryId = Constants.categories[categoryName].id;
    this.getData(categoryId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {categoryName} = this.props.match.params;
    const {categoryName: prevCategoryName} = prevProps.match.params;
    if (categoryName !== prevCategoryName) {
      const categoryId = Constants.categories[categoryName].id;
      this.setState({data: []});
      this.getData(categoryId);
    }
  }

  render() {
    const {renderCards} = this.props;
    const {data} = this.state;

    return (
      <Paginator className="aca-card__container">
        {renderCards(data)}
      </Paginator>
    );
  }
}

export default RenderCardHOC(ContainerHOC(withRouter(Category)));
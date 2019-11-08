import React from 'react';
import moment from "moment";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgLoaded: false
    };
  }

  handleLoad = () => {
    this.setState({imgLoaded: true});
  };

  render() {
    const {
      news_id,
      url,
      title,
      date,
      img_url,
      category,
      source_name,
      reactions
    } = this.props;
    const {imgLoaded} = this.state;

    return (
      <article>
        {title}
        {moment(date * 1000).format("llll")}
        <img
          src={imgLoaded ? img_url : "https://loading.io/spinners/cutiefox/lg.cutie-fox-spinner.gif"}
          alt=""
          onLoad={this.handleLoad}
        />
        {source_name}
        {category}
      </article>
    );
  }
}

export default Card;
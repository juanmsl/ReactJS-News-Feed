import React from 'react';
import moment from "moment";
import {LoadImage} from "components";

class Card extends React.Component {
  render() {
    const {
      //news_id,
      //url,
      title,
      date,
      img_url,
      category,
      source_name,
      //reactions
    } = this.props;

    return (
      <article>
        {title}
        {moment(date * 1000).format("LLLL")}
        <LoadImage src={img_url} />
        {source_name}
        {category}
      </article>
    );
  }
}

export default Card;
import React from 'react';
import moment from "moment";
import LazyLoad from 'react-lazyload';
import {LoadImage} from "components";

class Card extends React.Component {
  render() {
    const {
      news_id,
      //url,
      title,
      date,
      img_url,
      category,
      source_name,
      //reactions
    } = this.props;

    return (
      <LazyLoad once key={news_id} placeholder={<section>Loading...</section>}>
        <article className="aca-card">
          <LoadImage src={img_url} className="aca-card__image" />
          <section>
            <h3>{title}</h3>
            <h5>{category}</h5>
          </section>
          <h6>{moment(date * 1000).format("LLLL")} | {source_name}</h6>
        </article>
      </LazyLoad>
    );
  }
}

export default Card;
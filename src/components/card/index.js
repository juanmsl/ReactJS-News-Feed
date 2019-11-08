import React from 'react';
import moment from "moment";
import LazyLoad from 'react-lazyload';
import {LoadImage} from "components";

class Card extends React.Component {
  render() {
    const {
      news_id,
      url,
      title,
      date,
      img_url,
      category,
      source_name,
      //reactions
    } = this.props;

    return (
      <LazyLoad once key={news_id} placeholder={<section>Loading...</section>}>
        <a href={url} target="_blank" rel="noopener noreferrer" className="aca-card">
          <LoadImage src={img_url} className="aca-card__image" title={title} />
          <section>
            <h3 className="aca-card__title" title={title}>{title}</h3>
            <h5>{category}</h5>
          </section>
          <h6>{moment(date * 1000).format("LLLL")} | {source_name}</h6>
        </a>
      </LazyLoad>
    );
  }
}

export default Card;
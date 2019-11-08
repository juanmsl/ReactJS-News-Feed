import React from 'react';
import {Card} from 'components';

const RenderCardHOC = (Container) => (
  class RenderCard extends React.Component {
    renderCards = (cards) => (
      cards.map((card, i) => (
        <Card key={i} {...card} />
      ))
    );

    render() {
      return <Container
        renderCards={this.renderCards}
        {...this.props}
      />
    }
  }
);

export default RenderCardHOC;
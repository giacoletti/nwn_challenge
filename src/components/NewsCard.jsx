import React from 'react';
import { Header, Card } from 'semantic-ui-react';

const NewsCard = (props) => {
  return (
    <Card
      href={props.news.url}
      data-cy={`news-${props.news.id}`}
      image={props.news.urlToImage}
      header={props.news.title}
      meta={`By: ${props.news.author} at ${props.news.source.name}`}
      description={props.news.description}
      extra={<Header as='h6'>Published at {props.news.publishedAt}</Header>}
    />
  )
}

export default NewsCard;

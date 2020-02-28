import React, { FC } from 'react';
import { Article } from '../utils/types';
import ArticleCard from '../molecules/ArticleCard';

interface Props {
  content: Array<{
    node: Article;
  }>;
}

const ContentFeed: FC<Props> = ({ content }) => {
  return (
    <>
      {content.map(({ node }, i) => (
        <ArticleCard
          expand={i <= 2}
          reverse={i % 2 === 1}
          to={'/' + node.slug.current}
          key={node.id}
          article={node}
        ></ArticleCard>
      ))}
    </>
  );
};

export default ContentFeed;

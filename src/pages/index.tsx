import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import ArticleCard from '../molecules/ArticleCard';
import MediaCard from '../molecules/MediaCard';
const Index: FunctionComponent = () => (
  <Layout>
    <ArticleCard
      category={'branch'}
      title="En najs artikel om coola saker"
      date="2020-01-01"
    ></ArticleCard>
    <ArticleCard category={'english'} reverse></ArticleCard>
    <ArticleCard category={'olGraver'}></ArticleCard>
    <ArticleCard
      category={'underhallning'}
      reverse
      expand={false}
    ></ArticleCard>
    <ArticleCard category={'aktuellt'} expand={false}></ArticleCard>
  </Layout>
);

export default Index;

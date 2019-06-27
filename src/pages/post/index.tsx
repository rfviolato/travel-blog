import React from 'react';
import Layout from '../../components/Layout';
import PostTemplate from '../../templates/post-page';

const post = {
  id: '1',
  title: 'City of bikes',
  content:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore deserunt hic, consequuntur numquam aliquid illo quam voluptas totam, magnam quo doloribus vitae odit perferendis. Dignissimos, nostrum? Temporibus iusto facilis ab! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore deserunt hic, consequuntur numquam aliquid illo quam voluptas totam, magnam quo doloribus vitae odit perferendis. Dignissimos, nostrum? Temporibus iusto facilis ab!',
  imageUrl:
    'https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1894&q=80',
  createdAt: new Date(),
};

const PostPage: React.SFC = () => {
  return (
    <Layout>
      <PostTemplate post={post} />
    </Layout>
  );
};

export default PostPage;

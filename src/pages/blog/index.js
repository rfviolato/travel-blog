import React from 'react';

import Layout from '../../components/Layout';
import BlogTemplate from './../../templates/blog-page';

class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout solidHeader={true}>
        <BlogTemplate />
      </Layout>
    );
  }
}

export default BlogIndexPage;

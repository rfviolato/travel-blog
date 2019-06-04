import React from 'react';

interface IFeaturedPost {
  title: string;
  description: string;
}

interface IFeaturedPostListItem {
  id: string;
  title: string;
  description: string;
}

interface IFeaturedPostProps {
  posts: IFeaturedPostListItem[];
}

const FeaturedPost: React.SFC<IFeaturedPost> = ({ title, description }) => (
  <div>
    <div>{title}</div>
    <div>{description}</div>
  </div>
);

const FeaturedPosts: React.SFC<IFeaturedPostProps> = ({ posts }) => {
  return (
    <div>
      {posts.map(({ id, ...post }) => {
        return (
          <div key={id}>
            <FeaturedPost {...post} />
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedPosts;

import React from 'react';
import styled from '@emotion/styled';
import { AllPosts } from './../components/blog';
import Center from './../components/Center';

const mockPosts = [
  {
    description:
      'The most striking thing about Amsterdam is just how true the stereotypes are: The locals are tall, apple-cheeked, and good-looking as they sail past you on fixed-gear bikes; the tree-lined canals are just as picturesque as you’ve heard, and the restaurants and shops are as cozy and well priced as those practical Dutch demand.',
    id: '1',
    imageSrc: 'https://cdn.tourradar.com/s3/tour/750x400/84941_f45c34.jpg',
    title: 'De Pijp',
    createdAt: new Date().toISOString(),
  },
  {
    description:
      'The low-rise neighborhood Zuidoost is located in a historically charged place. In the past, there were the Egeldonk and Echtenstein honeycomb apartments that have virtually disappeared completely with the breaker. Instead of the massive concrete flats of the time, one now finds a neighborhood on a human scale. ',
    id: '2',
    imageSrc:
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/42/0f.jpg',
    title: 'Zuidoost',
    createdAt: new Date().toISOString(),
  },
  {
    description:
      'The most striking thing about Amsterdam is just how true the stereotypes are: The locals are tall, apple-cheeked, and good-looking as they sail past you on fixed-gear bikes; the tree-lined canals are just as picturesque as you’ve heard, and the restaurants and shops are as cozy and well priced as those practical Dutch demand.',
    id: '3',
    imageSrc: 'http://www.reguliers.net/pictures/koningsdag.jpg',
    title: 'De Pijp',
    createdAt: new Date().toISOString(),
  },
  {
    description:
      'The low-rise neighborhood Zuidoost is located in a historically charged place. In the past, there were the Egeldonk and Echtenstein honeycomb apartments that have virtually disappeared completely with the breaker. Instead of the massive concrete flats of the time, one now finds a neighborhood on a human scale. ',
    id: '4',
    imageSrc:
      'https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/321877_Viator_Shutterstock_31143.jpg',
    title: 'Zuidoost',
    createdAt: new Date().toISOString(),
  },
  {
    description:
      'The most striking thing about Amsterdam is just how true the stereotypes are: The locals are tall, apple-cheeked, and good-looking as they sail past you on fixed-gear bikes; the tree-lined canals are just as picturesque as you’ve heard, and the restaurants and shops are as cozy and well priced as those practical Dutch demand.',
    id: '5',
    imageSrc: 'https://cdn.getyourguide.com/img/tour_img-655953-145.jpg',
    title: 'De Pijp',
    createdAt: new Date().toISOString(),
  },
  {
    description:
      'The low-rise neighborhood Zuidoost is located in a historically charged place. In the past, there were the Egeldonk and Echtenstein honeycomb apartments that have virtually disappeared completely with the breaker. Instead of the massive concrete flats of the time, one now finds a neighborhood on a human scale. ',
    id: '6',
    imageSrc:
      'https://www.arcam.nl/wp-content/uploads/2017/11/Jannes-Linders_6.jpg',
    title: 'Zuidoost',
    createdAt: new Date().toISOString(),
  },
];

const Title = styled.h1`
  text-align: center;
`;

const BlogTemplate: React.SFC = () => {
  return (
    <article className="center">
      <div>
        <Title>All posts</Title>
      </div>
      <div>
        <AllPosts posts={mockPosts} />
      </div>
    </article>
  );
};

export default BlogTemplate;

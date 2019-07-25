import React from 'react';
import styled from '@emotion/styled';
import { AllPosts } from './../components/blog';

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
      'Its a moving experience to visit this museum, which traces Van Goghs life and development via the worlds largest collection of his work, both familiar paintings and wonderful little-known pieces. Its fascinating to see his work change from tentative beginnings to giddily bright sunflowers, and on to his frenzy of creative brilliance towards the end of his life. There are also paintings by contemporaries Gauguin, Toulouse-Lautrec, Monet and Bernard. You must choose a timeslot and prepurchase tickets online.',
    id: '3',
    imageSrc: 'http://www.reguliers.net/pictures/koningsdag.jpg',
    title: 'De Pijp',
    createdAt: new Date().toISOString(),
  },
  {
    description:
      'This quirky museum, a 23m-long sailing barge from 1914, offers a good sense of how gezellig (cosy) life can be on the water. The actual displays are minimal, but you can watch a presentation on houseboats (some pretty and some ghastly) and inspect the sleeping, living, cooking and dining quarters with all the mod cons. Cash only.      ',
    id: '4',
    imageSrc:
      'https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/321877_Viator_Shutterstock_31143.jpg',
    title: 'Zuidoost',
    createdAt: new Date().toISOString(),
  },
  {
    description:
      'This is a very special place, crammed with pianolas from the early 1900s. The museum has around 50, although only a dozen are on display at any given time, as well as some 30,000 music rolls and a player pipe organ. The curator gives an hour-long guided tour and music demonstrations with great zest. Regular concerts are held on the player pianos, featuring anything from Mozart to Fats Waller and rare classical or jazz tunes composed especially for the instrument.',
    id: '5',
    imageSrc: 'https://cdn.getyourguide.com/img/tour_img-655953-145.jpg',
    title: 'De Pijp',
    createdAt: new Date().toISOString(),
  },
  {
    description:
      'The small, authentic Two Swans is at its hilarious best on weekend nights, when you can join patrons belting out classics and traditional Dutch tunes in a rollicking, unforgettable cabaret-meets-karaoke evening. The fact that singers are often fuelled by the liquid courage of the Trappist beers on tap only adds to the spirited fun. Dont be afraid to join in.',
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

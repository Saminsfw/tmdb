import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { FaSearch } from 'react-icons/fa';
const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Header_component: Story = {
  args: {
    logo: {
      url: '/',
      imgSrc: 'https://placehold.co/150x20',
      altText: 'Header Logo',
    },
    menu: {
      links: [
        { text: 'Movies', url: '/movies' },
        { text: 'Tv Shows', url: '/tvshows' },
        { text: 'People', url: '/people' },
        { text: 'More', url: '/more' },
      ],
    },
    ActionIcon: FaSearch,
  },
};

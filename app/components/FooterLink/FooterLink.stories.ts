import type { Meta, StoryObj } from '@storybook/react';
import FooterLink from './FooterLink';
const meta = {
  title: 'Components/FooterLink',
  component: FooterLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FooterLink>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Footer_Link: Story = {
  args: {
    text: 'About TMDB',
    url: '/about',
  },
};
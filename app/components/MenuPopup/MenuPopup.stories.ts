import type { Meta, StoryObj } from "@storybook/react";
import PopupMenu from "./MenuPopup";
const meta = {
  title: "Components/PopupMenu",
  component: PopupMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof PopupMenu>;

export default meta;
type Story = StoryObj<typeof meta>;
export const PopupMenu_component: Story = {
  args: {
    links: [
      { text: "Option 1", url: "/option1" },
      { text: "Option 2", url: "/option2" },
      { text: "Option 3", url: "/option3" },
      { text: "Option 4", url: "/option4" },
    ],
  },
};

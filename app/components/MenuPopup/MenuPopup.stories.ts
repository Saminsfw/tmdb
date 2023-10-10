import type { Meta, StoryObj } from "@storybook/react";
import PopupMenu from "./MenuPopup";
import { popupMenuLinks } from "@/app/mockdata";
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
  args: popupMenuLinks,
};

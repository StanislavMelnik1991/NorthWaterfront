import type { Meta, StoryObj } from "@storybook/react";
import { PageDecorator, WhiteBgDecorator } from "../../config/storybook";
import { Loader } from "./Loader";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Loader",
  component: Loader,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
  decorators: [],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    size: 80,
  },
  decorators: [WhiteBgDecorator],
};

export const OnPage: Story = {
  args: {
    size: 120,
  },
  decorators: [PageDecorator],
};

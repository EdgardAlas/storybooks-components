import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: { type: 'select' } },
    color: { control: { type: 'select' } },
    fontColor: { control: { type: 'color' } },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: 'normal',
  allCaps: false,
};
export const AllCaps = Template.bind({});
AllCaps.args = {
  size: 'normal',
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  allCaps: true,
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  allCaps: true,
  color: 'tertiary',
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: 'h1',
  allCaps: true,
  fontColor: '#122abc',
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  size: 'h1',
  backgroundColor: '#122abc',
  fontColor: 'white',
};

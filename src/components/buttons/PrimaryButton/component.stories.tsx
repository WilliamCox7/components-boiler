import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component, { ValidSizes, ValidSides } from './component';

export default {
  title: 'Components/Buttons',
  component: Component,
  argTypes: {
    label: {
      type: { name: 'string', required: true },
      description: 'The text displayed on the button.',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    size: {
      description: 'There are three different sizes. Large, medium, and small.',
      table: {
        defaultValue: { summary: ValidSizes.MEDIUM },
      },
      control: 'select',
      options: Object.values(ValidSizes),
    },
    icon: {
      description:
        'Any valid Phosphor icon can be on either side of the label.',
      table: {
        defaultValue: { summary: 'undefined' },
      },
      control: 'select',
      options: ['Plus', 'ArrowLeft', 'ArrowRight'],
    },
    iconSide: {
      description: 'What side of the label should the icon render on?',
      table: {
        defaultValue: { summary: 'undefined' },
      },
      control: 'select',
      options: Object.values(ValidSides),
    },
    disabled: {
      description: 'Disables all functionality of the button.',
      table: {
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    loading: {
      description:
        'When true, an animated spinner is shown instead of the label.',
      table: {
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
  },
  args: {
    size: ValidSizes.MEDIUM,
    label: 'Get Started',
    disabled: false,
    loading: false,
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);
export const PrimaryButton = Template.bind({});

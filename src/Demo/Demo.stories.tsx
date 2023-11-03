import type { Meta, StoryObj } from '@storybook/react';

import { Demo } from './Demo';

const meta: Meta<typeof Demo> = {
    component: Demo,
    };

export default meta;

type Story = StoryObj<typeof Demo>;

export const Default: Story = {
    render: () => <Demo />,
};

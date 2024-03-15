import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '.';

const meta: Meta<typeof Tooltip> = {
  title: 'uikit/Tooltip',
  component: Tooltip,
  // tags: ["autodocs"],
  argTypes: {
    extClassName: {
      description:
        'Данная настройка используется для передачи css-свойств в виде строки селектора. Свойства могут быть определны в css-модуле компонента, в котором используется Tootip.',
    },
    visible: {
      description: 'Определяет видимость модального окна.',
    },
    pointerPosition: {
      description: 'Определяет расположение уголка компонента Tooltip.',
    },
    changeVisible: {
      description:
        'Функция, предназначенная для закрытия компонента Tooltip (изменения значения пропса visible).',
    },
    elementStyles: {
      description:
        'Позволяет передавать компоненту css-свойства в виде инлайн-стилей. Можно использовать для передачи данных, необходимых для позиционирования модального окна, если их невозможно определить заранее и они высчитываются в момент рендеринга компонента.',
    },
    children: {
      description:
        'Элементы ReactNode, который будут отрисованы внутри компонента.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visible: true,
    children: 'Какой-то контент',
  },
};

export const CenterPointer: Story = {
  args: {
    visible: true,
    children: 'Какой-то контент',
    pointerPosition: 'center',
  },
};

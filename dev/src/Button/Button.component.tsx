import React from 'react';
import { CreateComponent, ComponentProps } from '@carthus/core';
import ButtonView from './View/Button.view'

const Button = CreateComponent({
    View: ButtonView,
    providers: [] as const
});

export type IButtonProps = ComponentProps<typeof Button>;
export default Button;
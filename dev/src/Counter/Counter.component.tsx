import React from 'react';
import { CreateComponent, ComponentProps } from '@carthus/core';
import CounterView from './View/Counter.view'

const Counter = CreateComponent({
    View: CounterView,
    providers: [] as const
});

export type ICounterProps = ComponentProps<typeof Counter>;
export default Counter;
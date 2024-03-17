import React from 'react';
import { CreateComponent, ComponentProps } from '@carthus/core';
import MainView from './View/Main.view'

const Main = CreateComponent({
    View: MainView,
    providers: [] as const
});

export type IMainProps = ComponentProps<typeof Main>;
export default Main;
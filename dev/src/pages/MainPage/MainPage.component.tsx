import React from 'react';
import { CreateComponent, ComponentProps } from '@carthus/core';
import MainPageView from './View/MainPage.view'

const MainPage = CreateComponent({
    View: MainPageView,
    providers: [] as const
});


export default MainPage;

interface IComponentViewProps { // інтерфейс компонента "ComponentView"
    title: string;
};

interface IStoreProviderProps { // інтерфейс компонента "StoreProvider"
    token: string;
};
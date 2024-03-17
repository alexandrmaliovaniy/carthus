import React from 'react';
import { CreateComponent, ComponentProps } from '@carthus/core';
import HomePageView from './View/HomePage.view'

const HomePage = CreateComponent({
    View: HomePageView,
    providers: [] as const
});


export type IHomePageProps = ComponentProps<typeof HomePage>;
export default HomePage;
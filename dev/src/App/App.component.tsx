import React from 'react';
import { CreateComponent, ComponentProps } from '@carthus/core';
import { AppProvider } from './Service/App';
import AppView from './View/App.view'

const App = CreateComponent({
    View: AppView,
    providers: [AppProvider] as const
});

export type IAppProps = ComponentProps<typeof App>;
export default App;
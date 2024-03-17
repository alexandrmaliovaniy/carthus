import React from 'react';
import { CreateComponent, ComponentProps } from '@carthus/core';
import TestPageView from './View/TestPage.view'

const TestPage = CreateComponent({
    View: TestPageView,
    providers: [] as const
});

export type ITestPageProps = ComponentProps<typeof TestPage>;
export default TestPage;
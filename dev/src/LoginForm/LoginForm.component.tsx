import React from 'react';
import { CreateComponent, ComponentProps } from '@carthus/core';
import LoginFormView from './View/LoginForm.view'

const LoginForm = CreateComponent({
    View: LoginFormView,
    providers: [] as const
});

export type ILoginFormProps = ComponentProps<typeof LoginForm>;
export default LoginForm;
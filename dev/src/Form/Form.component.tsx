import React from 'react';
import { CreateComponent, ComponentProps } from '@carthus/core';
import { FormProvider } from './Service/Form';
import FormView from './View/Form.view'

const Form = CreateComponent({
    View: FormView,
    providers: [FormProvider] as const
});

export type IFormProps = ComponentProps<typeof Form>;
export default Form;
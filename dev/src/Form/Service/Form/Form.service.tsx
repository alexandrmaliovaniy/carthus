import React from 'react';

interface IFormServiceProps {
    onSubmit: () => void;
}

const FormService = (props?: IFormServiceProps) => {
    const submit = props?.onSubmit
    return { submit }
};

export default FormService;
export type { IFormServiceProps };
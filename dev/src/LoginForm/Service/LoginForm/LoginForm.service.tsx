import React, {SyntheticEvent} from 'react';

interface ILoginFormServiceProps {}

const LoginFormService = (props?: ILoginFormServiceProps) => {
    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log("SUMBIT")
    };

    return {onSubmit};
};

export default LoginFormService;
export type { ILoginFormServiceProps };
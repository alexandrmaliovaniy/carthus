import React, { FC } from 'react';
import styles from "./LoginForm.styles.module.scss";
import Form from "../../Form";
import {useLoginForm} from "../Service/LoginForm";

interface ILoginFormViewProps {

}

const LoginFormView: FC<ILoginFormViewProps> = ({...props}) => {
    const service = useLoginForm();
    return <Form onSubmit={service.onSubmit}>
        <button>asd</button>
    </Form>;
};

export default LoginFormView;
export type { ILoginFormViewProps }
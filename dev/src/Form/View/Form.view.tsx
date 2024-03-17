import React, { FC } from 'react';
import styles from "./Form.styles.module.scss";
import {useForm} from "../Service/Form";

interface IFormViewProps {
    children: any
}

const FormView: FC<IFormViewProps> = ({...props}) => {
    const form = useForm();
    return <form onSubmit={form.submit} children={props.children} /> ;
};

export default FormView;
export type { IFormViewProps }
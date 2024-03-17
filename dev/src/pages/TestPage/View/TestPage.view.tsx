import React, { FC } from 'react';
import styles from "./TestPage.styles.module.scss";
import {Link} from "react-router-dom";


interface ITestPageViewProps {

}

const TestPageView: FC<ITestPageViewProps> = ({...props}) => {
    return (
        <>
            <Link to={MainRoute.PATH}>Main</Link>
            <Link to={HomeRoute.PATH}>Home</Link>
            <Link to={QweRoute.PATH}>Home</Link>
        </>
    );
};

export default TestPageView;
export type { ITestPageViewProps }
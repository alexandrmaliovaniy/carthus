import React, { FC } from 'react';
import styles from "./HomePage.styles.module.scss";
import {Link} from "react-router-dom";

interface IHomePageViewProps {

}

const HomePageView: FC<IHomePageViewProps> = ({...props}) => {
    return (
        <>
            <Link to={MainRoute.PATH}>Main</Link>
            <Link to={TestRoute.PATH}>Test</Link>
        </>
    );
};


const ComponentView = () => {
    const state = useStore(); // -> state
    return ({/*...Actual JSX implementation */})
};

export default HomePageView;
export type { IHomePageViewProps }
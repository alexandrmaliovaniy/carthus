import React, { FC } from 'react';
import {Link} from "react-router-dom";

interface IMainPageViewProps {
 qwe: string
}

const MainPageView: FC<IMainPageViewProps> = ({...props}) => {
    return (
        <>
            {"Hello"}
        </>
    );
};

export default MainPageView;
export type { IMainPageViewProps }
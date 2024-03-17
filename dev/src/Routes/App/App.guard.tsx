import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface IAppGuardProps {
    children: any
}

const AppGuard: FC<IAppGuardProps> = ({children, ...props}) => {
    return children;
};

export type { IAppGuardProps };
export default AppGuard;
import React, { FC } from 'react';
import MainRoute from "../../Routes/Main.route";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

interface IAppViewProps {

}
const AppView: FC<IAppViewProps> = ({...props}) => {
    console.log("RENDER SUKA APP VIEW")
    return <RouterProvider router={createBrowserRouter(MainRoute)} />
};

export default AppView;
export type { IAppViewProps }
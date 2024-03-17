import React from 'react';
import { CreateRoute } from '@carthus/core';
import RegistrationRoute from './Registration/Registration.route';
import AuthRoute from './Auth/Auth.route';
import LandingGuard from "./Landing.guard";
import {Outlet} from "react-router-dom";
import QweRoute from "./Auth/Qwe/Qwe.route";

const LandingRoute = CreateRoute({
    path: "landing",
    Guard: LandingGuard,
    Layout: Outlet,
    Component: () => {
        console.log("qq", QweRoute.PATH)
        return <div>
            <a href={AuthRoute.PATH}>auth</a>
            <a href={QweRoute.PATH}>qwe</a>
        </div>
    },
    routes: [RegistrationRoute, AuthRoute]
})

export default LandingRoute;
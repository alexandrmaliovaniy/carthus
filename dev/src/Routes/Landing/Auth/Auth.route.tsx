import React from 'react';
import { CreateRoute } from '@carthus/core';
import QweRoute from './Qwe/Qwe.route';
import AuthGuard from "./Auth.guard";
import {Outlet} from "react-router-dom";

const AuthRoute = CreateRoute({
    path: "auth",
    Guard: AuthGuard,
    Layout: Outlet,
    Component: () => "auth",
    routes: [QweRoute]
})

export default AuthRoute;
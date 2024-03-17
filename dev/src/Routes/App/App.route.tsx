import React from 'react';
import { CreateRoute } from '@carthus/core';
import { Outlet } from 'react-router-dom';
import AppGuard from './App.guard';
import LandingRoute from "../Landing/Landing.route";

const AppRoute = CreateRoute({
    path: "app",
    Guard: AppGuard,
    Layout: Outlet,
    Component: () => (
        <a href={LandingRoute.PATH}>landign</a>
    ),
    routes: []
})

export default AppRoute;
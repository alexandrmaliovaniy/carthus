import React from 'react';
import { CreateRouter } from '@carthus/core';
import {Outlet} from "react-router-dom";
import landingRoute from "./Landing/Landing.route";
import MainGuard from "./Main.guard";
import AppRoute from './App/App.route';

// import LandingRoute from "./Landing/Landing.route";

const MainRoute = CreateRouter({
    path: "/",
    Guard: MainGuard,
    Layout: Outlet,
    Component: () => "main",
    routes: [landingRoute, AppRoute]
})
console.log(MainRoute)
export default MainRoute;
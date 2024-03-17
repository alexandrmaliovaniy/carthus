import React from 'react';
import { CreateRoute } from '@carthus/core';

const RegistrationRoute = CreateRoute({
    path: "registration",
    Guard: null,
    Layout: null,
    Component: () => "reg",
    routes: []
})

export default RegistrationRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';

const PageMain = React.lazy(_ => import("../pages/page-main"));

export default [
    {
        path: "/",
        element: <PageMain />
    },
    {
        path: "*",
        element: <Navigate to="/" replace />
    }
]
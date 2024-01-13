import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import routes from "@/router"

import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";

export default memo(function Main() {
    return (
        <div>
            <AppHeader />
            <Suspense fallback={<div>loading</div>}>
                {useRoutes(routes)}
            </Suspense>
            <AppFooter />
        </div>
    );
})
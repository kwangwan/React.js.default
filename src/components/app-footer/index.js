import React, { memo } from "react";

import {
    AppFooterWrapper
} from "./style";

export default memo(function AppFooter() {
    return (
        <AppFooterWrapper>
            <div>Footer</div>
        </AppFooterWrapper>
    );
})
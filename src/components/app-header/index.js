import React, { memo } from "react";

import {
    AppHeaderWrapper
} from "./style";

export default memo(function Appheader() {
    return (
        <AppHeaderWrapper>
            <div>header</div>
        </AppHeaderWrapper>
    );
})
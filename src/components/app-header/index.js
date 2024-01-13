import React, { memo } from "react";

import {
    AppHeaderWrapper
} from "./style";

import i18n from "../../i18n/i18n";

export default memo(function Appheader() {
    const userLanguage = navigator.language || navigator.userLanguage;
    if (userLanguage === "ko-KR") {
        i18n.changeLanguage("ko");
    }

    return (
        <AppHeaderWrapper>
            <div>header</div>
        </AppHeaderWrapper>
    );
})
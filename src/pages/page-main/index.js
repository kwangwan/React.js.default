import React, { memo } from "react";

import {
    PageMainWrapper
} from "./style";

import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

export default memo(function PageMain() {
    const { t } = useTranslation();
    i18n.changeLanguage('ko');

    return (
        <PageMainWrapper>
            <div>{t('page-main')}</div>
        </PageMainWrapper>
    );
})
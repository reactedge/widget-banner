import React from 'react';
import { renderToString } from 'react-dom/server';
import {BannerWidgetView} from "../BannerWidgetView.tsx";
import type {BannerRawWidgetConfig} from "../BannerConfig.ts";

export const renderHtml = (config: BannerRawWidgetConfig): string => {
    return renderToString(
        <div className="reactedge-usp">
            <BannerWidgetView rawConfig={config} />
        </div>
    );
};
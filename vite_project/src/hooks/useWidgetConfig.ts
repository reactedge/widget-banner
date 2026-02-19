import {useMemo} from "react";
import {type BannerWidgetConfig, readWidgetConfig} from "../BannerConfig.ts";
import {activity} from "../activity";

export function useWidgetConfig(
    host: HTMLElement
): BannerWidgetConfig | null {
    return useMemo(() => {
        const baseConfig = readWidgetConfig(host);
        if (!baseConfig) {
            activity('bootstrap', 'Widget is not correctly configured', null, 'error');
            return null;
        }

        activity('bootstrap', 'Widget config', baseConfig);

        return baseConfig
    }, [host]);
}




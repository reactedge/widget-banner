import {useMemo} from "react";
import {type BannerWidgetConfig, readWidgetConfig} from "../BannerConfig.ts";
import {activity} from "../activity";

export function useWidgetConfig(
    host: HTMLElement
): BannerWidgetConfig | null {
    return useMemo(() => {
        const baseConfig = readWidgetConfig(host);
        if (!baseConfig) {
            activity('bootstrap', '[Banner] Widget is not correctly configured', null, 'error');
            return null;
        }

        activity('bootstrap', '[Banner] Widget config loaded', baseConfig);

        return baseConfig
    }, [host]);
}




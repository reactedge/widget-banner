import {activity} from "./activity";
import type {BannerSettingConfig, BannerSlide} from "./components/Types.ts";

export interface BannerRawWidgetConfig {
    data: BannerWidgetConfig
}

export interface BannerWidgetConfig {
    readonly slides: BannerSlide[]

    readonly settings: BannerSettingConfig;
}

export function readWidgetConfig(
    rawConfig: BannerRawWidgetConfig
): BannerWidgetConfig {
    const contract = {
        slides: rawConfig.data.slides,
        settings: rawConfig.data.settings
    };

    activity('bootstrap', 'Config resolved', contract);

    return Object.freeze(contract);
}
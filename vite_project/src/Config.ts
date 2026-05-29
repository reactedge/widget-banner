import {activity} from "./activity";
import type {BannerSettingConfig, BannerSlide} from "./components/Types.ts";

export interface RawWidgetConfig {
    data: WidgetConfig
}

export const WIDGET_ID = 'banner';

export interface WidgetConfig {
    readonly slides: BannerSlide[]

    readonly settings: BannerSettingConfig;
}

export function readWidgetConfig(
    rawConfig: RawWidgetConfig
): WidgetConfig {
    const contract = {
        slides: rawConfig.data.slides,
        settings: rawConfig.data.settings
    };

    activity('bootstrap', 'Config resolved', contract);

    return Object.freeze(contract);
}
import {type BannerSettingConfig, type BannerSlide, defaultBannerConfig} from "./components/Types.ts";

export interface BannerWidgetConfig {
    /**
     * Structured banner payload.
     * Shape is banner-owned and opaque to the platform.
     */
    readonly slides: BannerSlide[]

    readonly settings: BannerSettingConfig;
}

export function readWidgetConfig(
    hostElement: HTMLElement
): BannerWidgetConfig {
    const configScript = hostElement.querySelector<HTMLScriptElement>(
        'script[type="application/json"][data-config]'
    );

    if (!configScript) {
        throw new Error("USP widget requires a <script data-config> block.");
    }

    try {
        const parsed = JSON.parse(configScript.textContent || "{}");

        return Object.freeze({
            slides: parsed.data.slides ?? [],
            settings: parsed.settings ?? defaultBannerConfig,
        });
    } catch {
        return {
            slides: [],
            settings: defaultBannerConfig
        };
    }
}

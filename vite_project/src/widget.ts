import { mountWidget } from "./mountWidget";
import type {BannerRawWidgetConfig} from "./BannerConfig.ts";

export async function mount(el: HTMLElement, config: BannerRawWidgetConfig) {
    if (!config) {
        throw new Error('Config is required');
    }

    await mountWidget(el, config)
}


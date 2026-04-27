import { createRoot } from "react-dom/client";
import type {BannerRawWidgetConfig} from "./BannerConfig.ts";
import {getMountedHost} from "./widget-runtime/lib/hostReader.ts";
import {activity} from "./activity";
import {BannerWidget} from "./components/BannerWidget.tsx";
import {fallback} from "./lib/fallback.ts";

export const WIDGET_ID = 'banner';

export function mountWidget(hostElement: HTMLElement, rawConfig: BannerRawWidgetConfig) {
    const mountedHost = getMountedHost(hostElement);

    activity('bootstrap', 'Widget mounted', hostElement);

    // Create React root inside shadow
    const root = createRoot(mountedHost);
    root.render(<BannerWidget rawConfig={rawConfig} />);

    fallback(hostElement)
}

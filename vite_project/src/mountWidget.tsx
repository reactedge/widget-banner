import { createRoot } from "react-dom/client";
import type {BannerRawWidgetConfig} from "./BannerConfig.ts";
import {activity} from "./activity";
import {BannerWidget} from "./components/BannerWidget.tsx";

export function mountWidget(hostElement: HTMLElement, rawConfig: BannerRawWidgetConfig) {
    const mountedHost = hostElement;

    activity('bootstrap', 'Widget mounted', hostElement);

    const root = createRoot(mountedHost);
    root.render(<BannerWidget rawConfig={rawConfig} />);
}

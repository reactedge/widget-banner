import { createRoot } from "react-dom/client";
import {BannerWidget} from "./components/BannerWidget.tsx";
import {fallback} from "./lib/fallback.ts";
import {activity} from "./activity";
import {getMountedHost} from "./widget-runtime/lib/hostReader.ts";
import {ensureGlobalStyle} from "./lib/style.ts";

export function mountWidget(hostElement: HTMLElement) {
    const mountedHost = getMountedHost(hostElement);

    ensureGlobalStyle('reactedge-banner-css', '/widget/banner.css');

    activity('bootstrap', 'Widget mounted', hostElement);

    // Create React root inside shadow
    const root = createRoot(mountedHost);
    root.render(<BannerWidget host={hostElement} />);

    fallback(hostElement)
}

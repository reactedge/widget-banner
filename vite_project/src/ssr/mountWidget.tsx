import {activity} from "../activity";
import {hydrateRoot} from "react-dom/client";
import type {RawWidgetConfig} from "../Config.ts";
import {WidgetWrapper} from "../components/WidgetWrapper.tsx";

export async function mountWidget(hostElement: HTMLElement, config: RawWidgetConfig) {
    const mountedHost = hostElement;

    activity('bootstrap', 'Widget mounted', hostElement);

    hydrateRoot(
        mountedHost,
        <WidgetWrapper rawConfig={config} />
    );
}

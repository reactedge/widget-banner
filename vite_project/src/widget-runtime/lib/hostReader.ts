import {injectStyles} from "../../lib/style.ts";
import {bannerStyles} from "../../styles/banner.styles.ts";

export function getMountedHost(hostElement: HTMLElement) {
     const shadow =
        hostElement.shadowRoot || hostElement.attachShadow({ mode: "open" });

    for (const css of bannerStyles) {
        injectStyles(shadow, css);
    }

    return shadow
}
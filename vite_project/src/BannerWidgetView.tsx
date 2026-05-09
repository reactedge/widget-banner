import React from 'react';
import {type BannerRawWidgetConfig, readWidgetConfig} from "./BannerConfig.ts";
import {BannerStaticSlide} from "./components/BannerStaticSlide.tsx";

type Props = {
    rawConfig: BannerRawWidgetConfig;
};

export const BannerWidgetView = ({ rawConfig }: Props) => {
    const config = readWidgetConfig(rawConfig);

    if (!config) return null;

    if (config.slides.length === 0) return null;

    return (
        <div className="reactedge-banner-view">
            {config.slides.map((slide, index) => {
                return (
                    <div
                        key={index}
                        className="reactedge-banner-view__item"
                    >
                        <BannerStaticSlide
                            slide={slide}
                            isActive={false}
                            tileMode={true}
                            height={rawConfig.data.settings.ssr?.height | rawConfig.data.settings.imageHeight}
                        />
                    </div>
                );
            })}
        </div>
    );
};


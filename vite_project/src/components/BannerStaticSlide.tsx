import React from 'react';
import type { BannerSlideProps } from "./Types";

export const BannerStaticSlide = ({ slide, height }: BannerSlideProps) => {
    const { image, title } = slide;

    const focal = image?.focalPoint || { x: 0.5, y: 0.5 };

    return (
        <div data-banner-slide>
            <img
                className="reactedge-banner-view-slide__image"
                src={image.src}
                srcSet={image.srcset}
                sizes={image.sizes}
                alt={title?.text || ""}
                style={{
                    objectPosition: `${focal.x * 100}% ${focal.y * 100}%`,
                    height: `${height}px`
                }}
            />
        </div>
    );
};
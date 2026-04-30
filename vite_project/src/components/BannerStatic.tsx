// components/BannerStatic.tsx
import { BannerSlide } from "./BannerSlide.tsx";
import type {BannerStaticProps} from "./Types.ts";

export const BannerStatic = ({ slides }: BannerStaticProps) => {
    // Breakpoints
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const isTablet = window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches;

    const columns = () => {
        const slideCount = slides.length;
        const maxColumns = isMobile ? 1 : isTablet ? 2 : 3;

        return Math.min(maxColumns, slideCount);
    }

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns()}, 1fr)`,
                gap: "20px",
                width: "100%"
            }}
        >
            {slides.map((slide, index) => {
                return (
                    <div key={index}>
                        <BannerSlide slide={slide} isActive={false} tileMode={true} />
                    </div>
                );
            })}
        </div>
    );
};

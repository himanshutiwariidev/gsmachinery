"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Visual weight of each slide relative to its distance from the active
// (center) slide. Index 0 = center, higher indexes sit further out.
const SLIDE_STYLES = [
  { width: 420, height: 480, translateX: 0, scale: 1, opacity: 1, blur: 0, z: 40 },
  { width: 300, height: 420, translateX: 300, scale: 0.85, opacity: 0.75, blur: 1, z: 30 },
  { width: 220, height: 380, translateX: 520, scale: 0.7, opacity: 0.4, blur: 2, z: 20 },
];

export default function GalleryCarousel({ items }) {
  const count = items.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback(
    (index) => setActiveIndex(((index % count) + count) % count),
    [count]
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (count <= 1 || isHovering) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % count);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [count, isHovering]);

  if (count === 0) return null;

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative h-[420px] sm:h-[480px] lg:h-[540px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {items.map((item, index) => {
            let offset = index - activeIndex;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const distance = Math.abs(offset);
            if (distance > 2) return null;

            const style = SLIDE_STYLES[distance];
            const direction = offset === 0 ? 0 : offset > 0 ? 1 : -1;

            return (
              <div
                key={item.src}
                aria-hidden={offset !== 0}
                className="absolute top-1/2 left-1/2 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-out"
                style={{
                  width: style.width,
                  height: style.height,
                  zIndex: style.z,
                  filter: `blur(${style.blur}px)`,
                  opacity: style.opacity,
                  transform: `translate(-50%, -50%) translateX(${
                    direction * style.translateX
                  }px) scale(${style.scale})`,
                }}
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover"
                  priority={offset === 0}
                />
                {offset === 0 && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                    <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold line-clamp-2">
                      {item.name}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-12 h-12 rounded-full border-2 border-[#232831] text-[#232831] hover:bg-[#b99631] hover:border-[#b99631] hover:text-white transition-all duration-300 flex items-center justify-center"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-12 h-12 rounded-full border-2 border-[#232831] text-[#232831] hover:bg-[#b99631] hover:border-[#b99631] hover:text-white transition-all duration-300 flex items-center justify-center"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

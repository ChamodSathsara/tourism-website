"use client";

import { useEffect } from "react";

const EASING = 0.14;
const STOP_THRESHOLD = 0.5;

function canScrollInside(element: Element, deltaY: number) {
  let current: Element | null = element;

  while (current && current !== document.documentElement) {
    const styles = window.getComputedStyle(current);
    const overflowY = styles.overflowY;
    const isScrollable =
      (overflowY === "auto" || overflowY === "scroll") &&
      current.scrollHeight > current.clientHeight;

    if (isScrollable) {
      const canMoveDown =
        deltaY > 0 &&
        current.scrollTop + current.clientHeight < current.scrollHeight - 1;
      const canMoveUp = deltaY < 0 && current.scrollTop > 0;

      if (canMoveDown || canMoveUp) return true;
    }

    current = current.parentElement;
  }

  return false;
}

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) return;

    let currentY = window.scrollY;
    let targetY = currentY;
    let animationFrame: number | null = null;

    const maximumScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const animate = () => {
      currentY += (targetY - currentY) * EASING;

      if (Math.abs(targetY - currentY) <= STOP_THRESHOLD) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        animationFrame = null;
        return;
      }

      window.scrollTo(0, currentY);
      animationFrame = window.requestAnimationFrame(animate);
    };

    const onWheel = (event: WheelEvent) => {
      if (
        event.defaultPrevented ||
        event.ctrlKey ||
        event.deltaY === 0 ||
        canScrollInside(event.target as Element, event.deltaY)
      ) {
        return;
      }

      event.preventDefault();

      const multiplier =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? 16
          : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
            ? window.innerHeight
            : 1;

      if (animationFrame === null) currentY = window.scrollY;
      targetY = Math.min(
        maximumScroll(),
        Math.max(0, targetY + event.deltaY * multiplier),
      );

      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const syncPosition = () => {
      if (animationFrame === null) {
        currentY = window.scrollY;
        targetY = currentY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", syncPosition, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", syncPosition);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return null;
}

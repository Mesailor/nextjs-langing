"use client";
import React from "react";

export function DebounceScrollSmooth() {
  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    function eventHandler() {
      document.documentElement.style.scrollBehavior = "auto";
      timeoutId = setTimeout(() => {
        document.documentElement.style.scrollBehavior = "smooth";
      }, 100);
    }
    window.addEventListener("load", eventHandler);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("load", eventHandler);
    };
  }, []);

  return null;
}

// README: BUGFIX. If page reloaded with scroll position when video element's top
// border intercept viewport, anchors will set wrong becouse of conflict with
// scroll restoration and sroll behavior.
// This component debounce enabling smooth scroll behavior to prevent
// the video element on the page from affecting anchoring.

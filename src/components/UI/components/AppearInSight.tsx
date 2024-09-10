"use client";

import * as React from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { PropsWithChildren } from "react";

export function AppearInSight({ children }: PropsWithChildren) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.4,
    root: null,
    rootMargin: "0px",
  });
  const [isSeen, setIsSeen] = React.useState(false);

  React.useEffect(() => {
    if (!isSeen && entry?.isIntersecting) {
      setIsSeen(true);
    }
  }, [entry?.isIntersecting]);

  return (
    <div ref={ref}>
      <div
        className={`transition duration-700 ease-out w-full ${
          isSeen ? "opacity-100" : "opacity-0 translate-y-20"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

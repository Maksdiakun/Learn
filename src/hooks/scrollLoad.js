import React, { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

export const useScrollLoad = (ref, callback) => {
  const debounced = useDebouncedCallback(updateScroll, 300);
  const eventHandler = (event) => {
    const fullHeight = event.target.scrollHeight;
    const height = event.target.clientHeight;
    const top = event.target.scrollTop;
    const scrollToEnd = top + height;
    if (scrollToEnd === fullHeight) {
      debounced.callback();
    }
  };
  const updateScroll = () => {
    callback();
  };
  useEffect(() => {
    if (ref) {
      ref.addEventListener("scroll", eventHandler);
      return () => ref.removeEventListener("wheel", eventHandler);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
  return;
};

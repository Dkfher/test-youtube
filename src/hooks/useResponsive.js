import { useCallback, useEffect, useState } from "react";

const useResponsive = (minWidth = 720) => {
  const [isMobile, setIsMobile] = useState(false);

  const matchMediaEvent = useCallback(() => {
    if (window.innerWidth <= minWidth) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [minWidth]);

  useEffect(() => {
    if (window.innerWidth <= minWidth) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [minWidth]);

  useEffect(() => {
    const matchMedia = window.addEventListener("resize", matchMediaEvent);

    return window.removeEventListener("change", matchMedia);
  }, [matchMediaEvent]);

  return isMobile;
};

export default useResponsive;

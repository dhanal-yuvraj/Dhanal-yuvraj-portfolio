import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handle() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  return size;
}

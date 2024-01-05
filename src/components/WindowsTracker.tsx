import { useEffect, useState } from "react";

const WindowsTracker = () => {
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);

  useEffect(() => {
    function getWidth() {
      setWindowsWidth(window.innerWidth);
    }
    window.addEventListener("resize", getWidth);

    return () => window.removeEventListener("resize", getWidth);
  }, []);

  return (
    <div>
      <h1>Windows Width: {windowsWidth}</h1>
    </div>
  );
};

export default WindowsTracker;

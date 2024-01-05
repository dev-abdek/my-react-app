import { useState } from "react";
import WindowsTracker from "./WindowsTracker";

const WidthButton = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle Windows Tracker</button>
      {show && <WindowsTracker />}
    </>
  );
};

export default WidthButton;

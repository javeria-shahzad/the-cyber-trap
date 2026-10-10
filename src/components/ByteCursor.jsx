
import { useEffect, useRef } from "react";
import byte from "../assets/byte.png";
import "../styles/byteCursor.css";

function ByteCursor() {
  const byteRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;

    if (isTouchDevice) return;

    const byteElement = byteRef.current;

    document.body.classList.add("byte-cursor-enabled");

    const handleMouseMove = (event) => {
      if (!byteElement) return;

      byteElement.style.transform = `translate3d(
        ${event.clientX}px,
        ${event.clientY}px,
        0
      ) translate(-50%, -50%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.classList.remove("byte-cursor-enabled");
    };
  }, []);

  const isTouchDevice =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none), (pointer: coarse)").matches;

  if (isTouchDevice) return null;

  return (
    <img
      ref={byteRef}
      src={byte}
      alt=""
      aria-hidden="true"
      className="byte-custom-cursor"
    />
  );
}

export default ByteCursor;

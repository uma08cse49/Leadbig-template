import React, { useEffect, useRef } from "react";
const CustomCursor = ({
  colorClassName
}) => {
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorInner = cursorInnerRef.current;
    const links = document.querySelectorAll("a");
    const handleMouseMove = e => {
      const {
        clientX: x,
        clientY: y
      } = e;
      if (cursor) {
        cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      }
      if (cursorInner) {
        cursorInner.style.left = `${x}px`;
        cursorInner.style.top = `${y}px`;
      }
    };
    const handleMouseDown = () => {
      cursor?.classList.add("click");
      cursorInner?.classList.add("cursorinnerhover");
    };
    const handleMouseUp = () => {
      cursor?.classList.remove("click");
      cursorInner?.classList.remove("cursorinnerhover");
    };
    const handleLinkMouseOver = () => cursor?.classList.add("hover");
    const handleLinkMouseLeave = () => cursor?.classList.remove("hover");
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    links.forEach(link => {
      link.addEventListener("mouseover", handleLinkMouseOver);
      link.addEventListener("mouseleave", handleLinkMouseLeave);
    });
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      links.forEach(link => {
        link.removeEventListener("mouseover", handleLinkMouseOver);
        link.removeEventListener("mouseleave", handleLinkMouseLeave);
      });
    };
  }, []);
  return <>
      <div ref={cursorRef} className={colorClassName ? `procus-cursor ${colorClassName}` : "procus-cursor"} style={{
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: 9999
    }} />
      <div ref={cursorInnerRef} className={colorClassName ? `procus-cursor2 ${colorClassName}` : "procus-cursor2"} style={{
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: 9999
    }} />
    </>;
};
export default CustomCursor;
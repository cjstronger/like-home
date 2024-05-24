import { useEffect, useRef } from "react";

export default function useModalClose(handler, value = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClick, value);
      return () => document.removeEventListener("click", handleClick, value);
    },
    [handler]
  );
  return ref;
}

import React, { useEffect, useCallback } from "react";

export const ShiftKey = () => {
  const escFunction = useCallback((event) => {
    console.log("今押しているのは" + event.keyCode);

    if (event.keyCode === 27) {
      // キーコードを判定して何かする。
      console.log("Esc Key is pressed!");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
  }, []);

  return <input />;
};

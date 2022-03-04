import { useCallback, useEffect, useState } from "react";

export const useKeys = () => {
  const [key, setKey] = useState(0);
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
  }, []);

  const escFunction = useCallback((event) => {
    console.log("今押しているのは" + event.keyCode);

    if (event.keyCode === 16) {
      // キーコードを判定して何かする。
      console.log("Shift Key is pressed!");
      setKey(event.keyCode);
    }
  }, []);

  const getDownKey = () => {
    return key;
  };

  return { key, setKey, getDownKey };
};

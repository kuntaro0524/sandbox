import { Box } from "@chakra-ui/react";
import React, { useEffect, useCallback, useState } from "react";

export const ShiftKey = () => {
  const [key, setKey] = useState("");
  const escFunction = useCallback((event) => {
    console.log("今押しているのは" + event.keyCode);
    setKey(event.keyCode);

    if (event.keyCode === 16) {
      // キーコードを判定して何かする。
      console.log("Shift Key is pressed!");
      setKey("Shift");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
  }, []);

  return <Box>{key}</Box>;
};

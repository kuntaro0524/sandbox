import * as React from "react";
import useMouse from "@react-hook/mouse-position";
import { Box, Stack } from "@chakra-ui/react";
import { useKeys } from "./hooks/useKeys";

export const Compo1 = () => {
  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  const { key } = useKeys();

  return (
    <Stack>
      <Box bg="teal" h="200px" v="200px" ref={ref}>
        Boxで指定している領域の中の相対座標を取得することができるわけだが
        <br />
        <p>x: ${mouse.x}</p>
        <p>y: ${mouse.y}</p>
      </Box>
      <p>{key}</p>
    </Stack>
  );
};

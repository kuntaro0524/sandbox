import * as React from "react";
import useMouse from "@react-hook/mouse-position";
import { Box } from "@chakra-ui/react";

export const Compo1 = () => {
  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  return (
    // You must provide the ref to the element you're tracking the
    // mouse position of
    <Box h="200px" v="200px" ref={ref}>
      Hover me and see where I am relative to the element:
      <br />
      x: ${mouse.x}
      y: ${mouse.y}
    </Box>
  );
};

import React, {
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
  ChangeEvent,
} from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

import { Box, ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { Compo1 } from "./components/atoms/Compo1";
import { ShiftKey } from "./components/atoms/ShiftKey";
import { CheckTable } from "./components/atoms/CheckTable";
import { TabTable } from "./components/molecules/TabTable";

// Modal related
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  const myPush = () => {
    const wl = Number(waveChar);
    const ddd = Number(distChar);
    const change_cond = { wavelength: wl, dist_raster: ddd };
    console.log(change_cond);

    const res = axios.patch(
      "http://localhost:1234/measurements/619b48bd9aef25a9b76c31c6",
      change_cond,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    console.log("UNKOUNKO");
  };

  // Modalの情報を取り込むためにテキストボックスの数値をリアルタイム取得する
  const [waveChar, setWaveChar] = useState("");
  const [distChar, setDistChar] = useState("");

  // 最初のレンダリングのときにだけ呼ばれる
  useEffect(() => {
    setWaveChar("1.0");
    setDistChar("120.0");
  }, []);

  // テキストが変化した場合に新しくその値を格納する部分 onChange
  const onChangeWL = (e: ChangeEvent<HTMLInputElement>) => {
    setWaveChar(e.target.value);
    console.log(waveChar);
  };
  const onChangeDistChar = (e: ChangeEvent<HTMLInputElement>) => {
    setDistChar(e.target.value);
    console.log(distChar);
  };

  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Box bg="tomato" w="100%" p={4} color="white">
            This is the Box.
          </Box>
          <Button onClick={onOpen}>UNKO</Button>
          <Box>
            <Compo1 />
            <ShiftKey />
            <CheckTable />
            <TabTable />
          </Box>
        </header>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalHeader>Modal windowで編集していこうなクソ野郎</ModalHeader>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Wavelength</FormLabel>
                <Input
                  value={waveChar}
                  placeholder="wavelength"
                  onChange={onChangeWL}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Camera distance</FormLabel>
                <Input
                  value={distChar}
                  placeholder="camera distance for data collection"
                  onChange={onChangeDistChar}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={myPush} variant="ghost">
                Secondary Action
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </ChakraProvider>
  );
}

export default App;

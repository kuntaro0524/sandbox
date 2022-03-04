import { EditIcon } from "@chakra-ui/icons";
import { Box, chakra, Flex, Text, useCheckbox } from "@chakra-ui/react";

export const CustomCheckbox = () => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox();

  return (
    <chakra.label
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      maxW="24"
      bg="green.50"
      border="1px solid"
      borderColor="green.500"
      rounded="lg"
      px={3}
      py={1}
      h={8}
      w={"full"}
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="2px solid"
        borderColor="green.500"
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w={2} h={2} bg="green.500" />}
      </Flex>
      <Text {...getLabelProps()} color="black">
        <EditIcon w={4} h={4} />
      </Text>
    </chakra.label>
  );
};

import { CheckCircleIcon } from "@chakra-ui/icons";
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { CustomCheckbox } from "../atoms/CustomCheckbox";
import { NormalCheckbox } from "../atoms/NormalCheckbox";

const conds = [
  {
    puckid: "CPS1999",
    sample_name: "Complex",
    pinid: 1,
    dist: 100.0,
    exp_time: 0.02,
    crystal_size: 10.0,
  },
  {
    puckid: "CPS1192",
    sample_name: "Kamakura",
    pinid: 1,
    dist: 100.0,
    exp_time: 0.02,
    crystal_size: 10.0,
  },
  {
    puckid: "CPS1837",
    sample_name: "Naosuke",
    pinid: 1,
    dist: 100.0,
    exp_time: 0.02,
    crystal_size: 10.0,
  },
];

export const CheckTable = () => {
  const keys = Object.keys(conds[0]);
  console.log(keys);

  return (
    <>
      <Table size="sm">
        <Thead>
          <Tr>
            <Tr>Checkbox</Tr>
            {keys.map((key) => (
              <Th> {key} </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {conds.map((cond) => (
            <Tr>
              <CustomCheckbox />
              <NormalCheckbox
                id={`${cond.puckid}-${cond.pinid}`}
                isChecked={false}
              />
              <Td>{cond.puckid}</Td>
              <Td>{cond.sample_name}</Td>
              <Td>{cond.pinid}</Td>
              <Td>{cond.dist}</Td>
              <Td>{cond.exp_time}</Td>
              <Td>{cond.crystal_size}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            {keys.map((key) => (
              <Th>{key}</Th>
            ))}
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
};

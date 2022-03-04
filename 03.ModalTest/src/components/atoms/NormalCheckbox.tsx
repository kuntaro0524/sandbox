import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

type Props = {
  id: string;
  isChecked: boolean;
};

export const NormalCheckbox = (props: Props) => {
  const { id, isChecked } = props;
  const [checked, setChecked] = useState(isChecked);

  console.log(id);

  const onClickCheck = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    const new_status = !e.target.checked;
    console.log(new_status);
    setChecked(new_status);
  };

  return (
    <Checkbox value={id} onChange={onClickCheck} checked={checked}>
      PUSH
    </Checkbox>
  );
};

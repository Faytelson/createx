import { type ChangeEventHandler } from "react";
import InputMask from "@mona-health/react-input-mask";
import Input from "@ui/Input";
import { type InputProps } from "@ui/Input";

type InputMaskedProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  mask: string | (string | RegExp)[];
} & Omit<InputProps, "onChange" | "value">;

const InputMasked = ({ value, onChange, disabled, mask, ...rest }: InputMaskedProps) => {
  return (
    <InputMask
      value={value}
      onChange={onChange}
      disabled={disabled}
      mask={mask}
    >
      <Input
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
    </InputMask>
  );
};

export default InputMasked;

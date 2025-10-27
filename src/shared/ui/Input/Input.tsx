import { cn } from "@/shared/lib";
import {
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import styles from "./Input.module.scss";
import HideIcon from "@/shared/assets/icons/Hide.svg?react";
import ShowIcon from "@/shared/assets/icons/Show.svg?react";
import { Button } from "../Button/Button";

type HTMLInputType = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

interface InputProps extends HTMLInputType {
  className?: string;
  type?: string;
  value?: string;
  rounded?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
  Icon: ReactNode;
}

export const Input = (props: InputProps) => {
  const {
    className,
    type = "text",
    value,
    rounded = false,
    disabled = false,
    onChange,
    Icon,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focusInput, setFocusInput] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleFocus = () => {
    setFocusInput(true);
  };
  const handleBlur = () => {
    setFocusInput(false);
  };

  return (
    <div
      className={cn(styles.inputContainer, className, {
        [styles.disabled]: disabled,
        [styles.rounded]: rounded,
        [styles.focus]: focusInput,
      })}
    >
      {Icon}
      <input
        {...rest}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        type={showPassword && type === "password" ? "text" : type}
        disabled={disabled}
        className={cn(styles.input, { [styles.disabled]: disabled })}
      />

      {type === "password" && (
        <Button theme="ghost" type="button" onClick={toggleShowPassword}>
          {showPassword ? <HideIcon /> : <ShowIcon />}
        </Button>
      )}
    </div>
  );
};

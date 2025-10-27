import { cn } from "@/shared/lib";
import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./Input.module.scss";

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
  return (
    <div
      className={cn(styles.inputContainer, className, {
        [styles.disabled]: disabled,
        [styles.rounded]: rounded,
      })}
    >
      <input
        value={value}
        type={type}
        disabled={disabled}
        className={cn(styles.input, { [styles.disabled]: disabled })}
      />
    </div>
  );
};

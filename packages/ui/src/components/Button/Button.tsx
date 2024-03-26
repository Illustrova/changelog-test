import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
};

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <button
      style={{ color: props.variant === "primary" ? "blue" : "inherit" }}
      {...rest}
    >
      {children}
    </button>
  );
};

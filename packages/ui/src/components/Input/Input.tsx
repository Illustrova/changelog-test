import React from "react";

type InputProps = {
  type?: string;
};

export const Input = ({ type, ...props }: InputProps) => {
  return <input type={type} {...props} />;
};

import React from "react";

type ButtonProps = {
  label: string;
  value: string;
};

export const Input = (props: ButtonProps) => {
  return <input {...props} />;
};

import React from "react";

type InputProps = {
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
};

export const Input = ({ type="text", ...props }: InputProps) => {
  return <input type={type} {...props} />;
};

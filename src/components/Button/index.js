import React from "react";
import Button from "./button";

export default props => {
  return <Button {...props}>{props.children}</Button>;
};

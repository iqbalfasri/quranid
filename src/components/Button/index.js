import React from "react";
import Button, { PaginateButton } from "./button";

export default props => {
  return <Button {...props}>{props.children}</Button>;
};
export { PaginateButton };

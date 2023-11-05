import { Link } from "react-router-dom";
import { ReactPropTypes } from "react";

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");
  if (props.isPrimary) className.push("btn-primary");
  return <div>Button</div>;
}

Button.ReactPropTypes = {
  type: ReactPropTypes.oneOF(["button", "link"]),
  onclick: ReactPropTypes.func,
  target: ReactPropTypes.string,
  className: ReactPropTypes.string,
  isDisabled: ReactPropTypes.bool,
  isLoading: ReactPropTypes.bool,
  isSmall: ReactPropTypes.bool,
  isLarge: ReactPropTypes.boll,
  isBlock: ReactPropTypes.bool,
  isExternal: ReactPropTypes.bool,
  hasShadow: ReactPropTypes.bool,
};

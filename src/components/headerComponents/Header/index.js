import React, { memo } from "react";
import "./index.scss";
import DesktopHeader from "../DesktopHeader";
import MobileHeader from "../MobileHeader";

const Header = memo(({ mobile }) => {
  return <header>{mobile ? <MobileHeader /> : <DesktopHeader />}</header>;
});
export default Header;

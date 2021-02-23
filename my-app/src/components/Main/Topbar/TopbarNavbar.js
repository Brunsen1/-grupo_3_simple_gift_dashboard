import React from "react"
import NavItemAlerts from "./TopbarNavbar/NavItemAlerts";
import NavItemMessages from "./TopbarNavbar/NavItemMessages";
import NavItemUserInformation from "./TopbarNavbar/NavItemUserInformation";
import Divider from "./TopbarNavbar/Divider";

function TopbarNavbar() {
  return (
    <ul classname="navbar-nav ml-auto">
      <NavItemAlerts />
      <NavItemMessages />
      <Divider />
      <NavItemUserInformation />
    </ul>
  );
}

export default TopbarNavbar;

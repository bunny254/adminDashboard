import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../../components/navBar";
import SideBar from "../../components/sideBar";
import { useGetUserQuery } from "../../state/api";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSideBarOpen, setSideBarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);
  console.log("data", data);
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <SideBar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setSideBarOpen={setSideBarOpen}
      />
      <Box flexGrow={1}>
        <NavBar
          user={data || {}}
          isSideBarOpen={isSideBarOpen}
          setSideBarOpen={setSideBarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

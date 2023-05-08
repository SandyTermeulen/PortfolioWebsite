import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import React from "react";
import { Box } from "@chakra-ui/react";
import Background from "./background";

export const Root = () => {
  return (
    <Box
    //backgroundImage="url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80')"
    //minHeight={"100vh"}
    >
      <Background />
      <Navigation />
      <Outlet />
    </Box>
  );
};

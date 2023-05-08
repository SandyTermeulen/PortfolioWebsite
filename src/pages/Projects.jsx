// @ts-nocheck
import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";

export const Projects = () => {
  return (
    <Center>
      <Box>
        <h1 className="heading">Recent work</h1>
        <Flex gap={10} w="80%" flexWrap="wrap" justify={"center"}></Flex>
      </Box>
    </Center>
  );
};

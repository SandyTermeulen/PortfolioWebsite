import { Center, Box } from "@chakra-ui/react";
import React from "react";
import Skills from "../components/Home/Skills";
import { About } from "../components/Home/About";
import Header from "../components/Home/Header";

export const Home = () => {
  return (
    <Center>
      <Box>
        <Center>
          <Header />
        </Center>
        <About />
        <Center>
          <h1 className="heading">Professional Skillset</h1>
        </Center>
        <Skills />
      </Box>
    </Center>
  );
};

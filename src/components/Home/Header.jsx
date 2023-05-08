import { Box } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";

export const Header = () => {
  return (
    <Box maxWidth={"80%"} marginBottom={"8rem"} marginTop={"4rem"}>
      <h1 className="heading">(&quot;Hello world!&quot;);</h1>
      <h1 className="heading-name">
        My name is
        <strong className="main-name"> Sandy Termeulen </strong>
      </h1>
      <div>
        <Typewriter
          options={{
            strings: ["And I like to </code>"],
            autoStart: true,
            loop: true,
            deleteSpeed: 100,
          }}
        />
      </div>
    </Box>
  );
};

export default Header;

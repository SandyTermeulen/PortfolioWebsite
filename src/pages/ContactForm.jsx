import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, Center, useToast } from "@chakra-ui/react";

const ContactForm = () => {
  const form = useRef();
  const [showToast, setShowToast] = useState(false);
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8tkxt72",
        "template_jahtbxg",
        // @ts-ignore
        form.current,
        "tcebc2v5Cmw91FxWh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = () => {
    setShowToast(true);
  };

  if (showToast) {
    toast({
      title: "Operatie geslaagd.",
      status: "success",
      duration: 5000,
      position: "top-right",
      isClosable: true,
    });

    // Reset de status
    setShowToast(false);
  }

  return (
    <Center>
      <Box>
        <Box className="contact-form">
          <Box margin={"1rem"}>
            <h1 className="header">Write me a message</h1>
          </Box>
          <form
            // @ts-ignore
            ref={form}
            onSubmit={sendEmail}
          >
            <label>Name</label>
            <input type="text" name="user_name" />
            <br />
            <label>Email</label>
            <input type="email" name="user_email" />
            <br />
            <label>Message</label>
            <textarea name="message" />
            <br />
            <input type="submit" value="Submit" onClick={handleSubmit} />
          </form>
        </Box>
      </Box>
    </Center>
  );
};

export default ContactForm;

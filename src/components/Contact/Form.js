import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FormMessage,
  FormGroup,
  Input,
  FormButton,
  Button,
  Result,
  MessageMe
} from "./ContactStyles";

const Form = () => {
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_298va8b",
        "template_hriy74c",
        e.target,
        "user_ey2F1AlTyMpuyUgHZkWWn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);
  return (
    <form onSubmit={sendEmail}>
      <FormGroup>
        <Input placeholder="NAME" type="text" name="name" required autoComplete="off" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="EMAIL" type="email" name="email" required autoComplete="off" />
      </FormGroup>
      <FormMessage>
        <MessageMe placeholder="MESSAGE" name="message" required />
      </FormMessage>
      <FormButton>
        <Button>SEND</Button>
      </FormButton>
      <div style={{ textAlign: "center" }}>
        {result ? <Result>Thank's. Your Message has been sent</Result> : null}
      </div>
    </form>
  );
};

export default Form;

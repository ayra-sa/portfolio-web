import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
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

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rae278j",
        "template_qznn0ls",
        // e.target,
        form.current,
        "oosYjcKm5TLaE8Hp0"
      )
      .then(
        (result) => {
          // console.log(form.current);
          // console.log(result);
          e.target.reset();
          setResult(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);
  return (
    <form onSubmit={sendEmail} ref={form}>
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
        <Button type="submit">SEND</Button>
      </FormButton>
      <div style={{ textAlign: "center" }}>
        {result ? <Result>Thank's. Your Message has been sent</Result> : null}
      </div>
    </form>
  );
};

export default Form;

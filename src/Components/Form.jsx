import React, { useRef, useState } from "react";

const Form = () => {
  const [isCompleteForm, setIsCompleteForm] = useState(false);
  const [formHaveErrors, setFormHaveErrors] = useState(false);
  let nameRef = useRef();
  let emailRef = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let name = nameRef.current.value;
    let email = emailRef.current.value;

    if (
      (name === "" || email === "") 
      || 
      (name.length < 5 || email.length < 10)
      ||
      (!email.includes("@") || !email.includes("."))
    ) {
      setFormHaveErrors(true);
      setIsCompleteForm(false);
    } else {
      setFormHaveErrors(false);
      setIsCompleteForm(true);
      setTimeout(() => {
        e.target.reset();
      }, 100);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm} className="form__contact">
        <input placeholder="Your name..." type="text" ref={nameRef}/>
        <input placeholder="Your email..." type="email" ref={emailRef}/>
        <button className="contact__button">Submit contact</button>
      </form>
      {formHaveErrors && <b>Por favor verifique su información nuevamente!</b>}
      {isCompleteForm && <b>Gracias {nameRef.current.value}, te contactaremos cuanto antes vía mail</b>}
    </div>
  );
};

export default Form;

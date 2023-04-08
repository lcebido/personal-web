import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Recaptcha from 'react-google-invisible-recaptcha'
import { Form, Row, Col, Button } from 'react-bootstrap'
import '../../sass/components/ContactForm.scss'

function ContactForm() {
  const form = useRef();
  const recaptchaRef = useRef();
  const [error, setError] = useState()
  const [isSubmitting, setSubmitting] = useState(false)
  const [toggleForm, setToggleForm] = useState(true)


  const onSubmit = (e) => {
    e.preventDefault();
    setError(undefined)
    let _error

    if (!form.current[0].value) {
      _error = { ..._error, user_name: 'Required Name' }
    }

    if (!form.current[1].value) {
      _error = { ..._error, user_email: 'Required Email' }
    }

    if (!form.current[2].value) {
      _error = { ..._error, user_message: 'Required Message' }
    }
    if (_error) {
      recaptchaRef.current.reset();
      setError({ ..._error })
      return
    }
    setSubmitting(true)
    recaptchaRef.current.execute();
  };

  const sendEmail = async () => {
    recaptchaRef.current.reset();

    await emailjs.sendForm('service_bz25pxi', 'template_5q79ob8', form.current, 'aj_l8pDyPKoxb3BNj')
      .then((result) => {
        setSubmitting(false)
        setToggleForm(true)
        console.log(result.text);
      }, (error) => {
        setSubmitting(false)
        console.log(error.text);
      });
  };

  const handleNewMessage = () => {
    recaptchaRef.current.reset();
    setToggleForm(false)
  }

  return (
    <>
      {toggleForm ?
        <div className="text-center text-thankyou">
          Thankyou your message has been sent!
          <div
            className="text-another-message"
            onClick={handleNewMessage}
          >
            Send Another Message?
          </div>
        </div>
        :
        <Form ref={form} onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="user_name"
              placeholder="Enter Full Name"
              isInvalid={error?.user_name}
            />
            <Form.Control.Feedback type="invalid">
              {error?.user_name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="user_email"
              placeholder="Enter Email"
              isInvalid={error?.user_email}
            />
            <Form.Control.Feedback type="invalid">
              {error?.user_email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="user_message"
              placeholder="Message Here"
              isInvalid={error?.user_message}
            />
            <Form.Control.Feedback type="invalid">
              {error?.user_message}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="button-container">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ?
                <>
                  Sending{`  `}
                  <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                  </div>
                </> :
                <>
                  Send Message{`  `}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                  </svg>
                </>
              }
            </button>
          </div>
        </Form>
      }
      <Recaptcha
        ref={recaptchaRef}
        sitekey="6LfDgG0lAAAAAC5euW7PXnDfN5EjHLXE97xZhIwj"
        onResolved={sendEmail}
      />
    </>
  );
}

export default ContactForm;
import "./contact.css";
import { Title } from "../../components";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import FormRow from "./FormRow";
import FormControl from "./FormControl";
import { rows, title, details } from "./data";
import Detail from "./Detail";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { motion } from "framer-motion"
import { animations } from "../../components/Animations.config";

const Alert = withReactContent(Swal)

export default function Contact() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      emailjs.sendForm('service_sbzm0y9', 'template_yj9dach', form, '07Nn38ayRbgjjo0R2')
      .then(() => {
        Alert.fire({
          position: 'center',
          icon: 'success',
          title: 'Thank you for reaching me out❤',
          showConfirmButton: false,
          timer: 3000
        })
        form.reset();
        setValidated(false)
      }, () => {
        Alert.fire({
          position: 'center',
          icon: 'error',
          title: 'Faild to send :(',
          showConfirmButton: false,
          timer: 3000
        })
      });
    }
    setValidated(true);
  };

  let id = 0;

  return (
    <motion.abbrmain className="contact" variants={animations} initial="initial" animate="animate" exit="exit">
      <Title content={title} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <h4 className="p-2 pt-3 text-white text-center mb-4 fw-normal">
              Message Me
            </h4>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              {/* loop on rows array */}
              {rows.map((row) => {
                id++;
                return (
                  // render 3 <FormRow></FormRow>
                  <FormRow key={`row-${id}`}>
                    {/* loop on nested arrays in rows array */}
                    {row.map((input) => (
                      // render <FromControl></FromControl> and send objects in nested array on rows array
                      <FormControl key={input.id} input={input} />
                    ))}
                  </FormRow>
                );
              })}
              <button className="main-button" type="submit">
                Send
              </button>
            </Form>
          </div>
          <div className="details-col col-lg-6 col-md-12 mb-4">
            <div className="details p-4 rounded-4">
              <div className="content">
                <h4 className="text-white text-center p-2 pt-3 fw-normal mb-4">
                  Contact Info
                </h4>
                <ul className="d-flex gap-5 flex-column p-0 m-0">
                  {details.map((detail) => (
                    <Detail key={detail.id} detail={detail} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.abbrmain>
  );
}

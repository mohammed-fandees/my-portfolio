import "./contact.css";
import { Title } from "../../components";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import FormRow from "./FormRow";
import FormControl from "./FormControl";
import { rows, title, details } from "./data";
import Detail from "./Detail";

export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  let id = 0;

  return (
    <main className="contact">
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
    </main>
  );
}

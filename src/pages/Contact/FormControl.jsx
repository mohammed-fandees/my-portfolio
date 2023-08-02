import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export default function FormControl(props) {
  const { input } = props;
  return (
    <Form.Group as={Col} md={input.width} controlId="validationCustom01">
      {(function () {
        if (input.type === "textarea") {
          return (
            <Form.Control
              required
              as={input.type}
              placeholder={input.placeholder}
              style={{ height: "140px" }}
            />
          );
        } else {
          if (input.valid) {
            return (
              <Form.Control
                required
                type={input.type}
                placeholder={input.placeholder}
              />
            );
          } else {
            return (
              <Form.Control type={input.type} placeholder={input.placeholder} />
            );
          }
        }
      })()}
      {input.valid ? (
        <>
          <Form.Control.Feedback>{input.valid}</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {input.invalid}
          </Form.Control.Feedback>
        </>
      ) : null}
    </Form.Group>
  );
}

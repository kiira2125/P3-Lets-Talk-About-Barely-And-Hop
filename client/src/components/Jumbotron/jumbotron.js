import {Container,Col, Row, Button} from 'react-bootstrap';

function Jumbotron() {
  return (
    <Container className="NotFound">
      <Row>
        <Col xs={12}>
          <h1> 404 Page Not Found </h1>
          <h2> Go to homepage, you seem lost #😥 </h2>
          <p>
            <Button href="/" bsStyle="primary">
              {" "}
              Back to HomePage 🍺{" "}
            </Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Jumbotron;
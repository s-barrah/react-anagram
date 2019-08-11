import React from 'react';

import {
  Card,
  CardBody,
  CardGroup,
  Form,
  InputGroup,
  Input,
  Button, Row, Col
} from 'reactstrap';


export default (props) => {

  const { handleChange, handleSubmit} = props;

  return (
    <CardGroup>
      <Card className="p-4">
        <CardBody>
          <Form >
            <h3 className="text-muted text-center">Search for Anagram</h3>
            <InputGroup className="mb-3">
              <Input type="text" onChange={e => handleChange(e)} placeholder="Enter a word" autoComplete="input" />
            </InputGroup>
            <Row>
              <Col xs="6">
                <Button onClick={e => handleSubmit(e)} type="button" color="primary" className="px-4">SEARCH</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </CardGroup>
  );
}

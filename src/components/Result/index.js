import React from 'react';

import {
  Card,
  CardBody,
  CardGroup,
} from 'reactstrap';


export default ({ results }) => {
  return (
    <CardGroup>
      <Card className="p-4">
        <CardBody>
          <h3 className="text-center">Matches</h3>
          { results ?
            (results).split(' ').map((str, index) => {
              return (<p key={index}>{ str }</p>);
            }) : ''
          }
        </CardBody>
      </Card>
    </CardGroup>
  );
}

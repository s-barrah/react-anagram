import React, { useEffect } from 'react';

import {
  Card,
  CardBody,
  CardGroup,
} from 'reactstrap';
import Loading from "../Loading";


export default (props) => {

  const { results, searchState } = props;

  // Component mounts
  useEffect(() => {

  }, [props]);

  return (
    <CardGroup>
      <Card className="p-4">
        <CardBody>
          <h3 className="text-center">Matches</h3>
          { searchState ?
            (
              <>
                <p className="text-center">Searching list...</p>
                <Loading/>
              </>
            ) : ''
          }
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

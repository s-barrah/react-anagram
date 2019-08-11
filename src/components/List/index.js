import React, { useState, useEffect } from 'react';

import {
  Card,
  CardBody,
  CardGroup,
} from 'reactstrap';

import Loading from '../Loading';

import axios from '../../lib/axios';

export default (props) => {
  const [words, setWords] = useState(null);

  const { updateList } = props;

  const getWords = (url) => {
    return axios
      .get(url) // gets data from file
      .then(res => {
        const results = (res.data).split(/\r?\n/); // split words by new line
        setWords(results);
        updateList(results);
      })
      .catch(err => {
        console.log(err);
        console.log('Could not fetch words. Try again later.');
      });
  };

  // Component mounts
  useEffect(() => {
    console.log('List Mounts');
    getWords('/wordlist.txt');
    return () => {
      console.log('List Unmounts');
      //reset states on dismount
      setWords(null);
    };
  }, []);


  return (

    <CardGroup>
      <Card className="p-4">
        <CardBody>
          <h3 className="text-center">List of words</h3>
          {
            words ?
              (words).map((str, index) => {
                return (<p key={index}>{ str }</p>);
              })
              :
              (
                <Loading/>
              )
          }
        </CardBody>
      </Card>
    </CardGroup>
  );
}

import React, { useState, useEffect } from 'react';

import {
  Card,
  CardBody,
  CardGroup,
} from 'reactstrap';

import Loading from '../Loading';

import axios from '../../lib/axios';

const WORDLIST_URL = '/wordlist.txt';

export default (props) => {
  const [words, setWords] = useState(null);

  const { updateList, updateButtonState } = props;

  const getWords = (url) => {
    return axios
      .get(url) // gets data from file
      .then(res => {
        const results = (res.data).split(/\r?\n/); // split words by new line
        setWords(results);
        updateList(results);
        updateButtonState(false);
      })
      .catch(err => {
        console.log(err);
        console.log('Could not fetch words. Try again later.');
      });
  };

  // Component mounts
  useEffect(() => {
    getWords(WORDLIST_URL);
    return () => {
      //reset states on dismount
      setWords(null);
    };
  }, []);


  return (

    <CardGroup>
      <Card className="p-4">
        <CardBody>
          {
            words ?
              (
                <div className="text-center">
                  <h3>List is available</h3>
                  <br/>
                  <p>Enter a word in the input to search</p>
                </div>
              )
              /*(words).map((str, index) => {
                return (<p key={index}>{ str }</p>);
              }) + 'and more...'*/
              :
              (
                <div className="text-center">
                  <h3>Loading list...</h3>
                  <Loading/>
                </div>
              )
          }
        </CardBody>
      </Card>
    </CardGroup>
  );
}

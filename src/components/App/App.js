import React, { useState, useEffect } from 'react';

import {
  Container,
  Col,
  Row,
} from 'reactstrap';

import './App.scss';

import { isAnagram } from '../../lib/utils';

// import Loading from '../Loading';
import List from '../List';
import Search from '../Search';
import Result from '../Result';

/***/
function App() {

  const [list, setList] = useState(null);
  const [results, setResults] = useState('');
  const [input, setInput] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setResults('');
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const matches = isAnagram(list, input); // Returns anagram matches
    const results = matches !== '' && matches !== null ? matches.join(' ') : 'No matches!';
    setResults(results);
  };

  // Component mounts
  useEffect(() => {
    console.log('App Mounts');
    // setWords(getWords('/wordlist.txt'));
    return () => {
      console.log('App Unmounts');
      //reset states on dismount
      setList(null);
      setResults('');
      setInput('');
    };
  }, []);

  return (
    <div className="app">
      <Container>
        <h1 className="text-center">Anagram</h1>
        <Row className="justify-content-center">
          <Col md="4">
            <List
              updateList={(data) => setList(data)}
            />
          </Col>
          <Col md="4">
            <Search
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Col>
          <Col md="4">
            <Result results={results}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';

import {
  Container,
  Col,
  Row,
} from 'reactstrap';

// Components
import ListCard from '../ListCard';
import SearchCard from '../SearchCard';
import ResultCard from '../ResultCard';

// styles
import './App.scss';

// Util function
import { isAnagram } from '../../lib/utils';


function App() {

  // initial states
  const [list, setList] = useState(null);
  const [results, setResults] = useState(null);
  const [input, setInput] = useState('');
  const [buttonState, setButtonState] = useState(true);
  const [searchState, setSearchState] = useState(false);

  /**
   * Handles input change events
   */
  const handleChange = e => {
    e.preventDefault();
    setResults('');
    setSearchState(false);
    setInput(e.target.value);
  };

  /**
   * Handles button click events
   */
  const handleSubmit = e => {
    e.preventDefault();
    setSearchState(true);

    setTimeout(() => {
      setSearchState(false);
      const matches = isAnagram(list, input); // Returns anagram matches
      const results = matches !== undefined && matches !== null ? matches.join(' ') : null;
      setResults(results);
    }, 1000);
  };

  // Component mounts
  useEffect(() => {
    return () => {
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
            <ListCard
              updateList={(data) => setList(data)}
              updateButtonState={(state) => setButtonState(state)}
            />
          </Col>
          <Col md="4">
            <SearchCard
              buttonState={buttonState}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Col>
          <Col md="4">
            <ResultCard
              searchState={searchState}
              results={results}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

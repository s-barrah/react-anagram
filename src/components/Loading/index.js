import React from 'react';
import styled from 'styled-components';

import loading from './Spinner.svg';


const Wrapper = styled.div`
  position: relative;
  display: flex;
  justifyContent: center;
  height: 50vh;
  width: 50vh;
  top: 0;
  bottom: 0;
  left: 10%;
  right: 0;
  backgroundColor: #fff;
`;

export default () => {

  return (
    <Wrapper>
      <img src={loading} alt="loading"/>
    </Wrapper>
  );
};

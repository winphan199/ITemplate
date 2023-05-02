import React from 'react';
import styled from 'styled-components';

const BigHeader = styled.h1.attrs({
  className: 'text-3xl font-bold underline',
})``;

function App() {
  return (
    <div>
      <BigHeader>hello world</BigHeader>
    </div>
  );
}

export default App;

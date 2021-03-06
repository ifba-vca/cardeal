import React from 'react';
import Styles from './Styles';
import MatrixDiscipline from './components/atoms/MatrixDiscipline'
import {Discipline} from './interfaces/components/atoms'

function App() {
  const example:Discipline = {
    
  }
  return (
    <>
      <Styles dark={true} />
      <h1>Cardeal</h1>
      <p>our design system</p>
      <MatrixDiscipline discipline={example}/>
    </>
  );
}

export default App;

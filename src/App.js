import React from 'react';
import PatientsList from './components/PatientsList';
import PatientInfo from './components/PatientInfo';

import './styles/App.css'

function App() {
  return (
    <div className="App">
      <PatientInfo></PatientInfo>
      <PatientsList></PatientsList>
    </div>
  );
}

export default App;

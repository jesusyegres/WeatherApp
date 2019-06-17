import React from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Buenos Aires,ar',
  'caracas,ve',
  'barcelona,es',
  'washington,us',
  'madrid,es'
]

function App() {
  const handleSelectionLocation = city =>{
    console.log("handleSelectionLocation");
  }
  return (
    <div className="App">
        <LocationList cities={cities} onSelectedLocation={handleSelectionLocation}></LocationList>
    </div>
  );
}

export default App;

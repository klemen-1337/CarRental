import './App.css';
import React, { useState } from "react"

const getCars = async () =>{
  const response = await fetch('http://127.0.0.1:8000/cars/');
  const data = await response.json();
  return data
};

function App() {

  const[cars, setCars] = useState([]);

  const onClickHandler = async () => {
    const data = await getCars();
    setCars(data);
  };

  return (
    <div>
      <div className="App">
        <h1>List of cars</h1>
        <button onClick={onClickHandler}>Click me to get cars!</button>
      </div>
      <div>
        
        {cars.length > 0 && (
          <div>
            {cars.map(car => (
              <div key={car.id}>
                <span>CAR: {car.id}</span>
                <br></br>
                <li>Car name: {car.name}</li>
                <li>Car alias: {car.alias}</li>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

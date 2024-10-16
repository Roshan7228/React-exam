import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [result, setValue] = useState([]);

  function ApiFunction() {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => {
        setValue(data.results);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    ApiFunction();
  }, []);

  return (
    <div>
      {result.map((el) => {
       return <div>
          <img src={el.picture.thumbnail} alt="image"/>
          <h1>{el.name.first} {el.name.last}</h1>
          <p>{el.email}</p>
       </div>
      })}
  </div>
  );
}

export default App;

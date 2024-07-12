import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import Employee from './components/Employee';

function App() {
  const [count, setCount] = useState(0);
  const data = "njananu map";
  const pass = "vanno vannu";
  const obj = {
    title: "2nd counter",
    count
  };

  let employee = [
    { name: 'anto', age: 12 },
    { name: 'jan', age: 12 },
    { name: 'mond', age: 12 },
  ];

  let Company = [
    { name: 'car', year: 12 },
    { name: 'bus', year: 12 },
    { name: 'bike', year: 12 }, // corrected 'ayearge' to 'year'
  ];

  const addCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <HELLO />
      
      <h2 className="hello">{data}</h2>
      <Header pass={pass} />
      <button onClick={addCount}>COUNT</button>
      <Counter title={'1st counter'} count={count} />
      <Counter {...obj} />
      {
        employee.map((emp, index) => (
          <Employee key={index} {...emp} />
        ))
      }
      <table>
        <thead>
          <tr>
            <th>type</th>
            <th>year</th>
          </tr>
        </thead>
        <tbody>
          {
            Company.map((comp, index) => (
              <tr key={index}>
                <td>{comp.name}</td>
                <td>{comp.year}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      
    </div>
  );
}


export default App;

function HELLO() {
  return (
    <h1 style={{ color: 'red' }}>HELLO WORLD</h1>
  );
}

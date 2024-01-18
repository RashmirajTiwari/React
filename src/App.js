import Expenses  from './Components/Expenses/Expenses'
import React from 'react';
import './App.css';

const App=()=>{
  const expenses=[
    {title:'Car Insurance',amount:294.67,date:new Date(2021,2,28)},
    {title:'Movie Show',amount:274.67,date:new Date(2021,2,21)},
    {title:'Clothes',amount:224.67,date:new Date(2021,2,13)},
    {title:'Foods',amount:244.67,date:new Date(2021,2,20)}
  ];

  return React.createElement(
    'div',{},
    React.createElement('h2',{},"Let's get started"),
    React.createElement(Expenses,{items:expenses})
  );
  // return (
  // <div>
  //   <h2>Let's get started</h2>
  //   <Expenses items={expenses}/>
  // </div>
  // );
}

export default App;

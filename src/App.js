import Expenses  from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpense/NewExpense';
import React,{useState} from 'react';
import './App.css';


const DUMMY_EXPENSES=[
  {id:'e1',title:'Car Insurance',amount:294.67,date:new Date(2021,2,28)},
  {id:'e2',title:'Movie Show',amount:274.67,date:new Date(2021,2,21)},
  {id:'e3',title:'Clothes',amount:224.67,date:new Date(2022,2,13)},
  {id:'e4',title:'Foods',amount:244.67,date:new Date(2021,2,20)}
];

const App=()=>{

  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  

  // return React.createElement(
  //   'div',{},
  //   React.createElement('h2',{},"Let's get started"),
  //   React.createElement(Expenses,{items:expenses})
  // );
  const addExpensehandler=(expense)=>{
    setExpenses([expense,...expenses]);
  }
  return (
  <div>
    <NewExpense onAddExpenseData={addExpensehandler}/>
    <Expenses items={expenses}/>
  </div>
  );
}

export default App;

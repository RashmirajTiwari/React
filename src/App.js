import ExpenseItem from './Components/ExpenseItem';
import './App.css';

function App() {
  const expenses=[
    {title:'Car Insurance',amount:294.67,date:new Date(2021,2,28)},
    {title:'Movie Show',amount:274.67,date:new Date(2021,2,21)},
    {title:'Clothes',amount:224.67,date:new Date(2021,2,13)},
    {title:'Foods',amount:244.67,date:new Date(2021,2,20)}
  ];
  return (
    <div>
     <h1>Let's get Started</h1>
    
   
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
     <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
     <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem> 
    </div>
  );
}

export default App;

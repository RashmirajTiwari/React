
import React,{useState} from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';


const Expenses=(props)=>{
  const [filteredYear,setFilteredYear]=useState('2020');
 
  const filteredChangedHandler=(selectedYear)=>{
      setFilteredYear(selectedYear);
  }

  const filterExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

  let expenseContent=<p>No Expenses Found.</p>
  if(filterExpenses.length>0){
    expenseContent=expenseContent=filterExpenses.map(expense=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)

  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangedHandler}/>
    {expenseContent}
    {filterExpenses.length===1 && <p>Only single Expense here. Please add more...</p>}
     </Card>
  );
}

export default Expenses;

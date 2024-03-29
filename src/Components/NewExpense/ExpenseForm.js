import React ,{useState} from "react";
import './ExpenseForm.css';

const ExpenseForm=(props)=>{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    // const [userInput,setUserInput]=useState({
    //   enteredTitle:'',
    //   enteredAmount:'',
    //   enteredDate:''
    // });

  const titleChangehandler=(event)=>{
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value
    // });
    // setUserInput((prevState)=>{
    //   return {prevState, enteredTitle:event.target.value}
    // });
  }
  const amountChangehandler=(event)=>{
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // });
  }
  const dateChangehandler=(event)=>{
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    // });
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
      title:enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate)
    }
    console.log(expenseData);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
    props.onSaveExpenseData(expenseData);

  }
 
  
  return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangehandler}/>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangehandler}/>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" value={enteredDate} min="2019-01-01" max="2024-12-31" onChange={dateChangehandler}/>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button type="submit">Add Expense</button>
      
      </div>
    </div>
</form>

}
export default ExpenseForm;
import React,{useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
    const [isEditing,setEditing]=useState(false);
    const saveExpenseDataHandler=(enteredExpensedata)=>{
        const expenseData={
            ...enteredExpensedata,
            id:Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpenseData(expenseData);
    }

    const startEditingHandler=()=>{
        setEditing(true);
    }
    const stopEditingHandler=()=>{
        setEditing(false);
    }
    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
        {isEditing &&  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        
       
    </div>
}

export default NewExpense;
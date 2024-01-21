import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpensedata)=>{
        const expenseData={
            ...enteredExpensedata,
            id:Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpenseData(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}

export default NewExpense;
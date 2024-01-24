
import React,{useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem=(props)=>{

   const [title,setTitle]=useState(props.title);
   const [amount,setAmount]=useState(props.amount);
   const clickHandler=()=>{
      setTitle('Updated')
   }
   const Amount=()=>{
      setAmount('100');
   }
   return ( 
    <Card className="expense-item">
       <div className="expense-item__description">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={title} amount={amount}></ExpenseDetails>
       </div>
       <button onClick={clickHandler}>Change Title</button>
       <button onClick={Amount}>Change Amount</button>
    </Card>
    );
    
}

export default ExpenseItem;
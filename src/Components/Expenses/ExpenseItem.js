import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem=(props)=>{
   const clickHandler=()=>{
      console.log("Clicked!!!");
   }
   const Delete=()=>{
      console.log("Deleted!!!");
   }
   return ( 
    <Card className="expense-item">
       <div className="expense-item__description">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} amount={props.amount}></ExpenseDetails>
       </div>
       <button onClick={clickHandler}>Change Title</button>
       <button onClick={Delete}>Delete Expense</button>
    </Card>
    );
    
}

export default ExpenseItem;
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props){

   
   return ( 
    <div className="expense-item">
       <div className="expense-item__description">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} amount={props.amount}></ExpenseDetails>
       </div>
    </div>
    );
    
}

export default ExpenseItem;
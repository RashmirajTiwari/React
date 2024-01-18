import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem=(props)=>{
   return ( 
    <Card className="expense-item">
       <div className="expense-item__description">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} amount={props.amount}></ExpenseDetails>
       </div>
    </Card>
    );
    
}

export default ExpenseItem;
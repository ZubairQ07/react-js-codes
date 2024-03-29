import React, { useState } from 'react'
import { MdAddchart} from "react-icons/md";
import './ExpenseForm.css'


function ExpenseForm(props) {
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }
    const amountChangeHandler=(e)=>{
        setEnteredAmount(e.target.value);
    }
    const dateChangeHandler=(e)=>{
        setEnteredDate(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate).toDateString()
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        // console.log(expenseData);

    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" required value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" required min='1' step='1' value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" required min='2020-01-01' max='2023-01-01' value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense<MdAddchart></MdAddchart></button>
        </div>
    </form>
  )
}

export default ExpenseForm
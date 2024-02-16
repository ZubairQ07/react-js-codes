import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

function NewExpense(props) {

  const NewExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id : Math.floor(Math.random() * 9999)
    };
    props.onShowEnteredExpense(expenseData);
  }

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={NewExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
import React from 'react'
import './ExpenseDate.css'
 const ExpenseDate = ({gama}) => {
    const month=gama.toLocaleDateString("en-us",{month:"long"});
    const day=gama.toLocaleDateString("en-us",{day:"2-digit"});
    const year=gama.getFullYear();
  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
    </div>
  )
}
export default ExpenseDate;
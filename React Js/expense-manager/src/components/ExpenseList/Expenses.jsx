import React,{useState} from 'react'
import { Card } from '../Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
 const Expenses = (props) => {

  const [filteredYear,setFilteredYear] = useState('2020')

  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={FilterChangeHandler}/>
        <ExpenseItem
        alpha={props.expenses[0].title}
        beta={props.expenses[0].amount}
        gama={props.expenses[0].date}
      />
      <ExpenseItem
        alpha={props.expenses[1].title}
        beta={props.expenses[1].amount}
        gama={props.expenses[1].date}
      />
      <ExpenseItem
        alpha={props.expenses[2].title}
        beta={props.expenses[2].amount}
        gama={props.expenses[2].date}
      />
      <ExpenseItem
        alpha={props.expenses[3].title}
        beta={props.expenses[3].amount}
        gama={props.expenses[3].date}
      />
    </Card>
  )
}
export default Expenses;
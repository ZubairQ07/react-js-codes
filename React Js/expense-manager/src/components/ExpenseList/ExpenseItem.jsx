import { Card } from "../Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

let ExpenseItem = (props)=> {
    const [alpha,setAlpha]=useState(props.alpha)
    const clickHandle=()=>{
        setAlpha('updated!!')
        console.log(alpha)
    }
    return(
        <Card className="expense-item">
            <ExpenseDate gama={props.gama}/>
            <div className="expense-item__description">
                <h2>{alpha}</h2>
                <div className="expense-item__price">${props.beta}</div>
                <button className="titlebutton" onClick={clickHandle}>
                    Change Title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;
import React from 'react'
import { useMealsListContext } from '../provider/MealsProvider'

export const Counter = () => {
    const {meals} = useMealsListContext();
  return (
    <div>
            <h3>Number Of Meals Today : {meals.length}</h3>
    </div>
  )
}

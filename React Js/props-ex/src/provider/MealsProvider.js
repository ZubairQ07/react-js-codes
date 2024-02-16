import React, { useState } from 'react'

const MealsContext = React.createContext();

const todaysMeals = ["Baked Beans","Baked Sweet potatoes","Baked Potatoes"];

    export const MealsProvider = ({children}) => {
        
        const [meals,setMealsList]=useState(todaysMeals)
  return (
    <MealsContext.Provider value={{meals}}>
        {children}
    </MealsContext.Provider>
  )
}
export const useMealsListContext = ()=>React.useContext(MealsContext);


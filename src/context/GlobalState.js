import React, {createContext, useReducer,useEffect } from 'react';
import AppReducer from './AppReducer'

const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
//Initial state
const initialState = {
    transactions:savedTransactions
}

//Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({children})=>{
     const [state, dispatch] = useReducer(AppReducer, initialState)

     //action
     function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
     }

     function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
     }

     useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
    }, [state.transactions]);

     return(<GlobalContext.Provider value ={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
     }}>
        {children}
     </GlobalContext.Provider>)
    }
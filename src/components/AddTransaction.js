import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const [text,setText] = useState('')
    const [categ,setCateg] = useState('')
    const [amount,setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id:Math.floor(Math.random() *100000000),
            text,
            categ,
            amount: +amount
        }
        addTransaction(newTransaction)
    }

    return (
        <>
           <h3>Add new transaction</h3>
           <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
                placeholder="Enter text..."/>

            </div>
            <div className='form-control'>
            <label htmlFor="text">Category</label>
            <select type="categ" value={categ} onChange={(e) => setCateg(e.target.value)} >
               <option selected>None</option>
               <option>Product</option>
	           <option>House and repair</option>
	           <option>Pharmacies</option>
               <option>Beauty</option>
               <option>Utilities and Internet</option>
               <option>Transport</option>
               <option>gas station</option>
            </select>
            </div>
            <div className="form-control">
                <label htmlFor="amount">
                    Amount
                   (negative - expense, positive - income)
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                placeholder='Enter amount...' />
            </div>
            <button className="btn">Add transaction</button>
           </form>
        </>
    )
}
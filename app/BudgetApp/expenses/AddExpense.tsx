"use client";

import { useState } from "react";
import { useBudget } from "../context";

export default function AddExpense() {
    const [expenseInputValue, setExpenseInputValue] = useState("");
    const [expenseNameInputValue, setExpenseNameInputValue] = useState("");
    const [category, setCategory] = useState("");
    const {  state, dispatch } = useBudget();
    return (
        <>
        <div className="flex flex-col gap-4">
            <input type="text" placeholder="Utgift" value={expenseNameInputValue} onChange={(e) => setExpenseNameInputValue(e.target.value)} className="bg-white p-3 rounded" />
            <input type="number" placeholder="Pris" value={expenseInputValue} onChange={(e) => setExpenseInputValue(e.target.value)} className="bg-white p-3 rounded" />
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-white p-3 rounded" >
                {state.categories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name} 
                    </option>
                    
                )
                )}
            </select>
            <button className="bg-blue-600 p-3 m-5 rounded text-white" onClick={() => {
                dispatch({ type: "ADD_EXPENSE", payload: { id: Date.now(), name: expenseNameInputValue, price: Number(expenseInputValue), categoryId: Number(category) }})
                setExpenseInputValue("");
                setExpenseNameInputValue("");
            }}>
                Lägg till räkning
            </button>
        </div>
        </>
    )
}
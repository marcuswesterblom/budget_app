"use client";
import { useState } from "react";
import { useBudget } from "../context";

export default function ExpenseList() {
    const { state, dispatch } = useBudget();
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editName, setEditName] = useState("");
    const [editPrice, setEditPrice] = useState("");
    return( 
        <>
        {state.categories.filter(category => 
            state.expenses.some(expense => expense.categoryId === category.id)
        )
        .map(category => (
            <div key={category.id} className={category.name}>
            <h3 className="font-bold">{category.name}</h3>
            <ul className="p-3">
                {state.expenses
                .filter(expense => expense.categoryId === category.id)
                .map(expense => (
                    <li key={expense.id}>
                        {editingId === expense.id ? (
                            <>  
                            <div className="changeContainer flex justify-center gap-2">
                            <div className="flex flex-wrap  justify-center items-center bg-gray-50 p-3 m-2 gap-2 rounded">
                                <input className="bg-white p-3 rounded border border-gray-200 max-w-40" value={editName} onChange={(e) => setEditName(e.target.value)} />
                                <input className="bg-white p-3 rounded border border-gray-200 max-w-40" type="number" value={editPrice} onChange={(e) => setEditPrice (e.target.value)} />
                            </div>
                                <button className="font-bold text-green-500 cursor-pointer" onClick={() => {
                                    dispatch({type: "EDIT_EXPENSE", payload: {
                                        ...expense,
                                        name: editName,
                                        price: Number(editPrice)
                                    }});
                                    setEditingId(null);
                                }}>Spara</button>
                            </div>
                            </>
                        ) : (
                        <>
                        <div>
                        {expense.name} - {expense.price} kr
                        <button className="ml-5 font-bold text-blue-500 cursor-pointer" onClick={() => {
                            setEditingId(expense.id);
                            setEditName(expense.name);
                            setEditPrice(String(expense.price));
                        }}>
                            Ändra
                        </button>
                        <button className="ml-5 text-red-700 font-bold cursor-pointer" onClick={() => {
                            dispatch({type: "DELETE_EXPENSE", payload: expense.id})
                        } }>
                            Ta bort
                        </button>
                        <hr className="text-gray-200 mb-2 mt-2"></hr>
                        </div>
                        </>
                    )}
                </li>
                ))}
            </ul>
            </div>
        ))}
        </>
    )

}
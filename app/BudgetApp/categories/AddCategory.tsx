"use client";
import { useState } from "react"
import { useBudget } from "../context";

export default function AddCategory() {
    const [inputValue, setInputValue] = useState("");
    const { dispatch } = useBudget();

    return (
        <>
        <input className="bg-white p-3 rounded" type="text" value={inputValue} onChange= {(e) => setInputValue(e.target.value)} placeholder="Kategori" />
        <button className="bg-blue-600 p-3 m-5 rounded text-white" onClick={() => {
            dispatch({ type: "ADD_CATEGORY", payload: { id: Date.now(), name: inputValue } });
            setInputValue("");
        }}>Lägg till kategori</button>
        </>
    )
}
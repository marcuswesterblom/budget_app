"use client";
import { useBudget } from "../context"

export default function CategoryList() {
    const { state, dispatch } = useBudget();

    return (
        <>
        <h3 className="underline underline-offset-4 decoration-1 decoration-gray-300">Mina kategorier</h3>
        <ul className="p-3 text-center">
            {state.categories.map(category => (
                <li key={category.id} value={category.name}>
                    {category.name}

                    <button className="ml-10 text-red-700 font-bold" onClick={() => 
                        dispatch({ type: "DELETE_CATEGORY", payload: category.id})}
                        >
                        Remove
                    </button>
                </li>
            ))}
        </ul>
        </>
    )
}
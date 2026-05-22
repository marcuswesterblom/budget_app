"use client";
import { useBudget } from "../context"

export default function CategoryList() {
    const { state, dispatch } = useBudget();

    return (
        <>
        <h3 className="font-bold">Mina kategorier</h3>
        <ul className="p-3">
            {state.categories.map(category => (
                <li key={category.id} value={category.name}>
                    {category.name}

                    <button className="ml-10 text-red-700 font-bold cursor-pointer" onClick={() => 
                        dispatch({ type: "DELETE_CATEGORY", payload: category.id})}
                        >
                        Ta bort
                    </button>
                    <hr className="text-gray-200 mb-2 mt-2"></hr>
                </li>
            ))}
        </ul>
        </>
    )
}
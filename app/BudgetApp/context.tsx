"use client";


import React, { createContext, useContext, useEffect, useReducer } from "react";
import { BudgetAction, BudgetState } from "./types";
import { budgetReducer, initialState } from "./reducer";

type BudgetContextType = {
    state: BudgetState;
    dispatch: React.Dispatch<BudgetAction>;
}

const BudgetContext = createContext<BudgetContextType | null>(null);

export const BudgetProvider = ({ children }:{ children:React.ReactNode }) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState);

    useEffect(() => {
        const savedSatate = localStorage.getItem("state");
        if (savedSatate) {
            dispatch({ type: "LOAD_BUDGET_STATE", payload: JSON.parse(savedSatate) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state));
    }, [state]);

    return (
        <BudgetContext.Provider value={{ state, dispatch }}>
            {children}
        </BudgetContext.Provider>
    )
}

export const useBudget = () => {
    const context = useContext(BudgetContext);
    if (!context) throw new Error("useBudget måste användas inom BudgetProvider");
    return context;
}
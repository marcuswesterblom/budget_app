import { BudgetAction, BudgetState } from "./types";

export const initialState: BudgetState = {
    expenses: [],
    categories: [],
    currency: "SEK"
}

export const budgetReducer = (state: BudgetState, action: BudgetAction): BudgetState => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [
                    ...state.expenses,
                    action.payload 
                ]
            };
        
        case "EDIT_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.map(expense =>
                    expense.id === action.payload.id
                    ? action.payload
                    : expense
                )
            };

        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            };

        case "ADD_CATEGORY":
            return {
                ...state,
                categories: [
                    ...state.categories,
                    action.payload
                ]
            };

        case "EDIT_CATEGORY":
            return {
                ...state,
                categories: state.categories.map(category => 
                    category.id === action.payload.id
                    ? action.payload
                    : category
                )
            }
        case "DELETE_CATEGORY":
            return {
                ...state,
                categories: state.categories.filter(category => category.id !== action.payload), 
                expenses: state.expenses.filter(expense => expense.categoryId !== action.payload)
            };

        case "SET_CURRENCY":
            return {
                ...state,
                currency: action.payload
            };

        case "LOAD_BUDGET_STATE":
            return action.payload;
        default:
            return state;
    }
};
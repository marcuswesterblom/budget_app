export type Expense = {
    id: number;
    name: string;
    price: number;
    categoryId: number;
}

export type Category = {
    id: number;
    name: string;
}

export type BudgetState = {
    expenses: Expense[];
    categories: Category[];
    currency: string;
}

export type BudgetAction = 
    | { type: "ADD_EXPENSE"; payload: Expense }
    | { type: "DELETE_EXPENSE"; payload: number }
    | { type: "EDIT_EXPENSE"; payload: Expense }
    | { type: "ADD_CATEGORY"; payload: Category }
    | { type: "DELETE_CATEGORY"; payload: number }
    | { type: "EDIT_CATEGORY"; payload: Category }
    | { type: "SET_CURRENCY"; payload: string }
    | { type: "LOAD_BUDGET_STATE"; payload: BudgetState }
 
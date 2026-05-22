import AddCategory from "./categories/AddCategory";
import CategoryList from "./categories/CategoryList";
import { BudgetProvider } from "./context";
import AddExpense from "./expenses/AddExpense";
import ExpenseList from "./expenses/ExpenseList";

export default function BudgetApp() {
    return (
        <BudgetProvider>
            <div className="categoryContainer flex flex-col flex-1 m-5 p-10 rounded bg-gray-100 border border-gray-200">
                <h2 className="text-2xl">Skapa kategori</h2>
                <hr className="text-gray-200 mb-5 mt-2"></hr>
                <AddCategory />
                <CategoryList />
            </div>
            <div className="expenseContainer flex flex-col flex-2 m-5 p-10 rounded bg-gray-100 border border-gray-200">
                <h2 className="text-2xl">Lägg till utgifter</h2>
                <hr className="text-gray-200 mb-5 mt-2"></hr>
                <AddExpense />
                <ExpenseList />
            </div>
        </BudgetProvider>
    )
}
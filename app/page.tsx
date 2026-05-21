import Image from "next/image";
import BudgetApp from "./BudgetApp";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <BudgetApp />
      </main>
    </div>
  );
}

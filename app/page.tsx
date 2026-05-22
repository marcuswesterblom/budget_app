import Image from "next/image";
import BudgetApp from "./BudgetApp";

export default function Home() {
  return (
    <div className="flex justify-center h-full bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col h-full w-full max-w-5xl items-center justify-center  bg-white dark:bg-black md:flex-row">
        <BudgetApp />
      </main>
    </div>
  );
}

import "./styles.css";
import Expense from "./Components/Expense";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseFilter from "./Components/ExpenseFilter";
import ExpensesChart from "./Components/ExpensesChart";
import React, { useState } from "react";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2019, 7, 14)
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 4.5,
    date: new Date(2020, 5, 12)
  }
];

export default function App() {
  //useState for Select Year dropdpown
  const [filteredYear, setFilteredYear] = useState("2020");

  //useState for dynamic expenses lists component
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  //below code is for the information text to let user know that which year data is not showing
  let filteredInformation = "the data for 2019, 2021 and 2022 is hidden";
  if (filteredYear === "2019") {
    filteredInformation = "the data for 2020, 2021 and 2022 is hidden";
  } else if (filteredYear === "2020") {
    filteredInformation = "the data for 2019, 2021 and 2022 is hidden";
  } else if (filteredYear === "2021") {
    filteredInformation = "the data for 2019, 2020 and 2022 is hidden";
  } else {
    filteredInformation = "the data for 2019, 2020 and 2021 is hidden";
  }

  //function for adding new expenses to expenses component

  function onSaveExpenseHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    setExpenses((prevValue) => {
      return [expenseData, ...prevValue];
    });
  }

  function onSaveFilterData(enteredFilterData) {
    setFilteredYear(enteredFilterData);
  }

  //filtering array based on year
  const filteredArray = expenses.filter((expense) => {
    return filteredYear === expense.date.getFullYear().toString();
  });

  // rendering filtered array based on year

  let expensesContent = <p>No Expenses Found</p>;
  if (filteredArray.length > 0) {
    expensesContent = filteredArray.map((expense) => (
      <Expense
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));
  }

  return (
    <div className="App">
    <h2>Please tilt for mobile devices</h2>
      <ExpenseForm onSaveExpenseData={onSaveExpenseHandler} />
      <ExpensesChart expenses={filteredArray} />

      <ExpenseFilter
        selectedYear={filteredYear}
        onSaveFilterData={onSaveFilterData}
      />
      <h3>{filteredInformation}</h3>

      {expensesContent}
    </div>
  );
}

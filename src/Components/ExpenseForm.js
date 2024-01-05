import "../CSS/expenseform.css";
import "../CSS/newexpense.css";
import { useState } from "react";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState();
  const [enteredDate, setEnteredDate] = useState("");

  function handleTitleChange(event) {
    setEnteredTitle(event.target.value);
  }
  function handleAmountChange(event) {
    setEnteredAmount(event.target.value);
  }
  function handleDateChange(event) {
    setEnteredDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const createObject = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(createObject);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }
  //useState for showing Add expense instead of full form
  const [variable, setVariable] = useState(false);

  function handleSetVariable() {
    setVariable(true);
  }
  function handleSubmitForm() {
    setVariable(false);
  }

  if (variable === false) {
    return (
      <div className="new-expense">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <button
              onClick={handleSetVariable}
              className="new-expense__actions"
            >
              Add Expense
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <form onSubmit={handleSubmit} method="post">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              placeholder="type here"
              onChange={handleTitleChange}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              placeholder="type amount"
              Type="number"
              min="0.01"
              step="0.01"
              onChange={handleAmountChange}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              placeholder="type here"
              min="2019-01-01"
              max="2022-12-31"
              onChange={handleDateChange}
              value={enteredDate}
            />
          </div>
          <button type="submit" className="new-expense__actions">
            Submit
          </button>
          <button
            type="button"
            onClick={handleSubmitForm}
            className="new-expense__actions"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

import "../CSS/expensefilter.css";

export default function ExpenseFilter(props) {
  function handleChange(event) {
    props.onSaveFilterData(event.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Select Year</label>
        <select value={props.selectedYear} onChange={handleChange}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}

import "./chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  const dataPointValues = props.datapoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  console.log(props.datapoints);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.id}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
}

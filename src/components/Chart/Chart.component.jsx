import React from "react";
import { Line, Bar } from "react-chartjs-2";

import { fetchDailyData } from "../../api";

import "./Chart.styles.css";

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dailyData: [],
    };
  }

  async componentDidMount() {
    const dailyData = await fetchDailyData();
    this.setState({ dailyData: dailyData });
  }

  render() {
    const { confirmed, infected, deaths, recovered } = this.props.data;
    const { country } = this.props;
    const { dailyData } = this.state;
    const lineChart = dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map((data) => data.reportDate),
          datasets: [
            {
              data: dailyData.map((data) => data.totalConfirmed),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyData.map((data) => data.deaths.total),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, 0.7)",
            },
          ],
        }}
      />
    ) : null;

    const barChart = confirmed ? (
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgba(0, 0, 255, 0.7)",
                "rgba(0, 255, 0, 0.7)",
                "rgba(255, 0, 0, 0.7)",
              ],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current situation in ${country}` },
        }}
      />
    ) : null;

    return <div className="chart">{country ? barChart : lineChart}</div>;
  }
}

export default Chart;

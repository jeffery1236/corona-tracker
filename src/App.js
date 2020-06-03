import React from "react";

import Cards from "./components/Cards/Cards.component";
import Chart from "./components/Chart/Chart.component";
import CountryPicker from "./components/CountryPicker/CountryPicker.component";
import { fetchData } from "./api";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {},
      country: '',
    };
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });

  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    console.log(fetchedData)
    this.setState({ data: fetchedData, country: country })
  }

  render() {
    const { data, country } = this.state

    return (
      <div className="App">
        <h1 className='title'>Covid-19 Summary</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;

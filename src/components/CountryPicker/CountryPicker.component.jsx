import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";

import { fetchCountries } from "../../api";

import "./CountryPicker.styles.css";

// const CountryPicker = () => {
//      fetchCountries().then(countries => console.log(countries))

//      return <h1>CountryPicker</h1>
// }

class CountryPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
    };
  }

  async componentDidMount() {
    const countries = await fetchCountries();
    this.setState({ countries });
    console.log(this.state.countries);
  }

  render() {
    return (
      <div className="form">
        <FormControl className="form-control">
          <NativeSelect defaultValue='' onChange={(e) => this.props.handleCountryChange(e.target.value)} className="native-select">
            <option value=''>Global</option>
            {this.state.countries.map((country, i) => (
              <option key={i} value={country} >{country}</option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>
    );
  }
}

export default CountryPicker;

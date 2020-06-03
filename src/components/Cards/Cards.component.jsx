import React from "react";

import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";


import "./Cards.styles.css"

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  console.log(recovered);
  return (
    <Grid container spacing={3} justify="center">
      <Grid item component={Card} xs={12} md={3} className='card infected'>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">
            Number of COVID-19 active cases
          </Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} xs={12} md={3} className="card deaths">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={deaths.value}
              duration={2}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">
            Number of deaths
          </Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} xs={12} md={3} className="card recovered">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Recovered
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={recovered.value}
              duration={2}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">
            Number of recoveries
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default Cards;

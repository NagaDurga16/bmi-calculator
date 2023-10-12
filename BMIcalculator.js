import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { blue } from "@mui/material/colors";
import { Button, Grid } from "@mui/material";
export default function BmiCalculator() {
  const [weight, setWeight] = useState(1);
  const [height, setHeight] = useState(1);
  const [bmi, setBmi] = useState(1);

  const weightHandler = (event) => {
    const kg = Number(event.target.value);
    setWeight(kg);
    const Hgt = height / 100;
    const BMI = weight / (Hgt * Hgt);
    setBmi(BMI);
  };

  const heightHandler = (event) => {
    const mts = Number(event.target.value);
    setHeight(mts);
    const Hgt = height / 100;
    const BMI = weight / (Hgt * Hgt);
    setBmi(BMI);
  };

  return (
    <Grid>
      <Box>
        <h1>BMI CALCULATOR</h1>
      </Box>
      <Box sx={{ width: 300, marginLeft: 70 }}>
        <Slider
          defaultValue={40}
          min={10}
          max={200}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={weightHandler}
        />
        <Slider
          defaultValue={60}
          min={30}
          max={250}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={heightHandler}
        />
      </Box>
      <Box>
        <p>Your BMI is</p>
        <Button col>{bmi}</Button>
      </Box>
    </Grid>
  );
}

import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";

export default function StopwatchTime() {
  var seconds = "00";
  var tens = "00";
  var Interval;

  const buttonStartClick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  const buttonStopClick = () => {
    clearInterval(Interval);
  };

  const buttonReset = () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    document.getElementById("tens").innerHTML = tens;
    document.getElementById("seconds").innerHTML = seconds;
  };
  function startTimer() {
    tens++;
    if (tens <= 9) {
      document.getElementById("tens").innerHTML = "0" + tens;
    }

    if (tens > 9) {
      document.getElementById("tens").innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      document.getElementById("seconds").innerHTML = "0" + seconds;
      tens = 0;
      document.getElementById("tens").innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      document.getElementById("seconds").innerHTML = seconds;
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <Typography variant="h2" style={{ margin: "20px 20px" }}>
            <span id="seconds">00</span>:<span id="tens">00</span>
          </Typography>

          <Button
            style={{
              marginRight: "10px",
              backgroundColor: "green",
            }}
            variant="contained"
            onClick={buttonStartClick}
            id="button-start"
          >
            Start
          </Button>
          <Button
            style={{ marginRight: "10px", backgroundColor: "green" }}
            variant="contained"
            onClick={buttonStopClick}
            id="button-stop"
          >
            Stop
          </Button>
          <Button
            style={{ backgroundColor: "green" }}
            variant="contained"
            onClick={buttonReset}
            id="button-reset"
          >
            Reset
          </Button>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Box>
  );
}

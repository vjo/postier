import React from "react";
import StepIcon from "./stepIcon";
import { CARD_HEIGHT } from "../pages";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return new Intl.DateTimeFormat("en", options).format(date);
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "5px",
  },
  label: {
    paddingBottom: "8px",
  },
  line: {
    height: "100%",
    marginLeft: "9px",
    borderLeftWidth: "1px",
    borderLeftStyle: "solid",
    borderLeftColor: theme.palette.primary.main,
  },
}));

export default function DeliveryTimeline({ events }) {
  const classes = useStyles();
  const ids = Object.keys(events);

  return (
    <Grid container spacing={2}>
      {ids.map((id, index) => {
        return (
          <Grid key={index} className={classes.container} container>
            <Grid item xs={1}>
              <StepIcon code={events[id].code} />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="body2" color="textSecondary">
                {formatDate(events[id].date)}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <div className={classes.line} />
            </Grid>
            <Grid className={classes.label} item xs={11}>
              <Typography variant="body1" color="textPrimary">
                {events[id].label}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}

import React from 'react';
import StepIcon from './stepIcon';
import { CARD_HEIGHT } from '../pages';
import { getCountryEmojiForEvent } from './utils';
import { formatDate } from './utils';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    marginBottom: '5px',
  },
  label: {
    paddingBottom: '8px',
  },
  line: {
    height: '100%',
    marginLeft: '9px',
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: theme.palette.primary.main,
  },
});

function DeliveryTimeline({ classes, events, timeline }) {
  return Object.keys(events).map((id, index) => {
    const countryFlag = getCountryEmojiForEvent(events[id], timeline);
    return (
      <Grid key={index} className={classes.container} container>
        <Grid item xs={1}>
          <StepIcon code={events[id].code} />
        </Grid>
        <Grid item xs={11}>
          <Typography color="textSecondary" display="inline" variant="body2">
            {formatDate(events[id].date)}
          </Typography>
          {countryFlag ? (
            <Typography display="inline" variant="body2">
              {` ${countryFlag}`}
            </Typography>
          ) : null}
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
  });
}

DeliveryTimeline.propTypes = {
  classes: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  timeline: PropTypes.array.isRequired,
};

export default withStyles(styles)(DeliveryTimeline);

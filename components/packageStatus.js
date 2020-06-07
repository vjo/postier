import React from 'react';
import { Chip, Typography, withStyles } from '@material-ui/core';
import { getStatusFromCode } from './utils';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import theme from './theme';
import PropTypes from 'prop-types';

const styles = {
  icon: {
    verticalAlign: 'bottom',
    marginRight: '4px',
  },
};

function PackageStatus({ classes, events }) {
  const lastEvent = events[0];
  const status = getStatusFromCode(lastEvent.code);

  const icon = (stage) => {
    switch (stage) {
      case 1:
      case 2:
      case 3:
      case 4:
        return (
          <InfoOutlinedIcon
            className={classes.icon}
            style={{ color: theme.palette.info.main }}
          />
        );
      case 5:
        return (
          <CheckCircleOutlinedIcon
            className={classes.icon}
            style={{ color: theme.palette.success.main }}
          />
        );
    }
  };

  return (
    <Typography variant="body1" color="textPrimary">
      {icon(status.stage)}
      {lastEvent.label}
    </Typography>
  );
}

PackageStatus.propTypes = {
  classes: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
};

export default withStyles(styles)(PackageStatus);

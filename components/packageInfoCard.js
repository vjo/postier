import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import DeliveryTimeline from "./deliveryTimeline";
import { formatDate } from "./utils";
import LaunchIcon from "@material-ui/icons/Launch";
import RefreshIcon from "@material-ui/icons/Refresh";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Collapse,
  Grid,
  IconButton,
  LinearProgress,
  Link,
  Typography,
  withStyles,
} from "@material-ui/core";
import TimeAgo from "react-timeago";

const LINEAR_PROGRESS_HEIGHT = "4px";

const styles = {
  launchIcon: {
    fontSize: "16px",
    verticalAlign: "middle",
    marginLeft: "2px",
  },
  showMore: {
    marginLeft: "auto",
  },
};

function PackageInfoCard({ classes, info, onDelete, onRefresh }) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const productLabel = (
    <Typography fontSize="small">
      {info.shipment.product}
      <LaunchIcon className={classes.launchIcon} />
    </Typography>
  );
  const title = (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="h5">{info.shipment.idShip}</Typography>
      </Grid>
      <Grid item>
        <Chip color="secondary" label={productLabel} variant="outlined" />
      </Grid>
    </Grid>
  );
  const subheader = info.shipment.event[0].label;

  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="remove" onClick={onDelete}>
            <CloseIcon />
          </IconButton>
        }
        subheader={subheader}
        title={title}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="refresh information" onClick={onRefresh}>
          <RefreshIcon />
        </IconButton>
        <Typography color="textSecondary" variant="subtitle2">
          <TimeAgo date={info.responseDate} minPeriod={15} />
        </Typography>
        <Button
          className={classes.showMore}
          onClick={handleExpandClick}
          size="small"
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto">
        <CardContent>
          <DeliveryTimeline
            events={info.shipment.event}
            timeline={info.shipment.timeline}
          />
        </CardContent>
      </Collapse>
      {info.isRefreshing ? (
        <LinearProgress color="secondary" />
      ) : (
        <div style={{ height: LINEAR_PROGRESS_HEIGHT }} />
      )}
    </Card>
  );
}

export default withStyles(styles)(PackageInfoCard);

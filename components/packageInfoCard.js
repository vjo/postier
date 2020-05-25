import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import DeliveryTimeline from "./deliveryTimeline";
import { formatDate } from "./utils";
import LaunchIcon from "@material-ui/icons/Launch";
import PackageStatus from "./packageStatus";
import RefreshIcon from "@material-ui/icons/Refresh";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
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
  cardHeader: {
    paddingBottom: "8px",
  },
  cardMainContent: {
    paddingTop: "8px",
    paddingBottom: "8px",
  },
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

  const title = (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="h5">{info.shipment.idShip}</Typography>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
  const subheader = (
    <Link
      color="textSecondary"
      fontSize="small"
      href={info.shipment.url}
      rel="noopener"
      target="_blank"
    >
      {info.shipment.product}
      <LaunchIcon className={classes.launchIcon} />
    </Link>
  );

  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="remove" onClick={onDelete}>
            <CloseIcon />
          </IconButton>
        }
        className={classes.cardHeader}
        subheader={subheader}
        title={title}
      />
      <CardContent className={classes.cardMainContent}>
        <Typography variant="body1" color="textPrimary">
          <PackageStatus events={info.shipment.event} />
        </Typography>
      </CardContent>
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

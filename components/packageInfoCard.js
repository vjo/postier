import React, { useState } from "react";
import DeliveryTimeline from "./deliveryTimeline";
import CloseIcon from "@material-ui/icons/Close";
import LinkIcon from "@material-ui/icons/Link";
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
  makeStyles,
  Typography,
} from "@material-ui/core";

const LINEAR_PROGRESS_HEIGHT = "4px";

const useStyles = makeStyles((theme) => ({
  showMore: {
    marginLeft: "auto",
  },
}));

export default function PackageInfoCard({ info, onDelete, onRefresh }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const title = (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="h5">{info.shipment.idShip}</Typography>
      </Grid>
      <Grid item>
        <Chip
          color="secondary"
          label={info.shipment.product}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
  const subheader = `${info.shipment.event[0].label}`;

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
        <Link href={info.shipment.url} rel="noopener" target="_blank">
          <IconButton aria-label="view on carrier website">
            <LinkIcon />
          </IconButton>
        </Link>
        <Button
          className={classes.showMore}
          onClick={handleExpandClick}
          size="small"
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
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

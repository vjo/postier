import React, { useState } from "react";
import createPersistedState from "use-persisted-state";
import ErrorCard from "../components/errorCard";
import Footer from "../components/footer";
import Head from "next/head";
import PackageInfoCard from "../components/packageInfoCard";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { Skeleton } from "@material-ui/lab";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";

export const CARD_HEIGHT = "194px";
const FETCH_ERROR_DATA = {};
const styles = {
  footer: {
    width: "100%",
    height: "30px",
    marginTop: "20px",
    borderTop: "1px solid #eaeaea",
    display: "flex",
  },
  footerIcon: {
    verticalAlign: "bottom",
  },
  cardShowMore: {
    marginLeft: "auto",
  },
};

const useTrackingInfoState = createPersistedState("trackingInfo");

function Home({ classes }) {
  const [trackingId, setTrackingId] = useState("");
  const [trackingInfo, setTrackingInfo] = useTrackingInfoState({});
  const ids = Object.keys(trackingInfo);

  const fetchId = (id) => {
    fetch(`/api/laposte?id=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) =>
        setTrackingInfo({
          ...trackingInfo,
          [id]: { ...trackingInfo[id], ...data },
        })
      )
      .catch((err) => {
        setTrackingInfo({
          ...trackingInfo,
          [id]: { idShip: id, returnMessage: err.message },
        });
      });
  };

  const handleInpuChange = (event) => setTrackingId(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (trackingId.length) {
      setTrackingInfo({ ...trackingInfo, [trackingId]: { isLoading: true } });
      setTrackingId("");
      fetchId(trackingId);
    }
  };

  const handleDelete = (id) => () => {
    const { [id]: _, ...rest } = trackingInfo;
    setTrackingInfo({ ...rest });
  };

  const handleNameChange = (id) => (event) =>
    setTrackingInfo({
      ...trackingInfo,
      [id]: { ...trackingInfo[id], name: event.target.value },
    });

  const handleRefresh = (id) => () => {
    setTrackingInfo({
      ...trackingInfo,
      [id]: { ...trackingInfo[id], isRefreshing: true },
    });
    fetchId(id);
  };

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <header>
          <Typography variant="h1" align="center">
            Postier
          </Typography>
        </header>
        <main style={{ marginTop: "40px" }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} md={9}>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  color="secondary"
                  id="outlined-basic"
                  label="Tracking Id"
                  placeholder="Enter tracking id, e.g. XX123456789YY"
                  variant="outlined"
                  fullWidth
                  onChange={handleInpuChange}
                  value={trackingId}
                  autoFocus
                />
              </form>
            </Grid>
            <Grid item xs={12} md={3}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSubmit}
                fullWidth
                endIcon={<PlaylistAddIcon />}
              >
                Track
              </Button>
            </Grid>
            {ids.length ? (
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {ids.map((id) =>
                    trackingInfo[id].isLoading ? (
                      <Grid key={id} item xs={12}>
                        <Skeleton height={CARD_HEIGHT} variant="rect" />
                      </Grid>
                    ) : trackingInfo[id].returnCode === 200 ? (
                      <Grid key={id} item xs={12}>
                        <PackageInfoCard
                          info={trackingInfo[id]}
                          onDelete={handleDelete(id)}
                          onNameChange={handleNameChange(id)}
                          onRefresh={handleRefresh(id)}
                        />
                      </Grid>
                    ) : (
                      <Grid key={id} item xs={12}>
                        <ErrorCard
                          info={trackingInfo[id]}
                          onDelete={handleDelete(id)}
                        />
                      </Grid>
                    )
                  )}
                </Grid>
              </Grid>
            ) : null}
          </Grid>
        </main>
        <Footer classes={classes} />
      </Container>
    </React.Fragment>
  );
}

export default withStyles(styles)(Home);

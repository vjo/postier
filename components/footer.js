import React from "react";
import { Grid, makeStyles, Link, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CodeIcon from "@material-ui/icons/Code";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: "30px",
    marginTop: "20px",
    borderTop: "1px solid #eaeaea",
    display: "flex",
  },
  icon: {
    verticalAlign: "bottom",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid alignItems="center" container direction="row">
        <Grid item xs={6}>
          <Typography align="left" color="textSecondary" variant="body2">
            <CodeIcon
              aria-label="coded"
              //classes={{ root: classes.icon }}
              className={classes.icon}
              fontSize="small"
            />{" "}
            {" with "}
            <FavoriteBorderIcon
              aria-label="love"
              //classes={{ root: classes.icon }}
              className={classes.icon}
              fontSize="small"
            />
            {" by "}
            <Link color="inherit" href="https://twitter.com/vjo">
              @vjo
            </Link>
            {"."}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right" color="textSecondary" variant="body2">
            <Link color="inherit" href="https://github.com/vjo/postier">
              <GitHubIcon
                aria-label="Github"
                //                classes={{ root: classes.icon }}
                className={classes.icon}
                fontSize="small"
              />
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

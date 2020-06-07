import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CodeIcon from '@material-ui/icons/Code';

export default function Footer({ classes }) {
  return (
    <footer className={classes.footer}>
      <Grid alignItems="center" container direction="row">
        <Grid item xs={6}>
          <Typography align="left" color="textSecondary" variant="body2">
            <CodeIcon
              aria-label="coded"
              className={classes.footerIcon}
              fontSize="small"
            />
            {' with '}
            <FavoriteBorderIcon
              aria-label="love"
              className={classes.footerIcon}
              fontSize="small"
            />
            {' by '}
            <Link color="inherit" href="https://twitter.com/vjo">
              @vjo
            </Link>
            {'.'}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right" color="textSecondary" variant="body2">
            <Link color="inherit" href="https://github.com/vjo/postier">
              <GitHubIcon
                aria-label="Github"
                className={classes.footerIcon}
                fontSize="small"
              />
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

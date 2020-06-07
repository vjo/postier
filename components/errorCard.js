import React, { useState } from 'react';
import { CARD_HEIGHT } from '../pages';
import CloseIcon from '@material-ui/icons/Close';
import { Alert, AlertTitle } from '@material-ui/lab';
import { IconButton, Typography } from '@material-ui/core';

export default function ErrorCard({ info, onDelete }) {
  const { idShip, returnCode, returnMessage } = info;

  return (
    <Alert
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          onClick={onDelete}
          size="small"
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
      severity="error"
      style={{ minHeight: CARD_HEIGHT }}
    >
      <AlertTitle>Error</AlertTitle>
      {returnCode ? (
        <Typography variant={'body2'}>Code Error: {returnCode}</Typography>
      ) : null}
      {idShip ? (
        <Typography variant={'body2'}>Tracking Id: {idShip}</Typography>
      ) : null}
      {returnMessage ? (
        <Typography variant={'body2'}>Message: {returnMessage}</Typography>
      ) : null}
    </Alert>
  );
}

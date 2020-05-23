import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import LensIcon from "@material-ui/icons/Lens";

const DELIVERED_CODE = "DI1";
const RETURNED_CODE = "DI2";

export default function StepIcon({ code }) {
  switch (code) {
    case DELIVERED_CODE:
      return <CheckCircleIcon color="primary" fontSize="small" />;
    case RETURNED_CODE:
      return <HighlightOffIcon color="primary" fontSize="small" />;
    default:
      return <LensIcon color="primary" fontSize="small" />;
  }
}

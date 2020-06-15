import React from "react";
import { Typography } from "@material-ui/core";

const PageTitle = props => {
  return (
    <Typography variant="h7" align={"center"} gutterBottom>
      {props.title}
    </Typography>
  );
};

export default PageTitle;
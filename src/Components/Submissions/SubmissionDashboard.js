import React, { Component, useEffect } from "react";
import Typography from "@mui/material/Typography";
import HOC from "../Layout/LayoutHOC"

const SubmissionDashboard = () => {
  return (
    <React.Fragment>
      <Typography paragraph>
       
        Submissions
      </Typography>
    </React.Fragment>
  );
};

const WrappedSubmissionDashboard = HOC(SubmissionDashboard);

export default WrappedSubmissionDashboard;

import React, { Fragment } from "react";
import {
  Card,
  CardContent,
  Box,
  Grid,
  Typography,
  CardHeader,
} from "@mui/material";

export default function MyEducation() {
  return (
    <Fragment>
      <Typography variant="h1" marginBottom={2}>
        My Education
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card sx={{ minHeight: 100 }}>
            <CardHeader
              title="Dayananda Sagar Institutions"
              subheader="BE in Mechanical Engineering"
            />
            <CardContent style={{ color: "#a9c3de" }}>
              August 2015 - August 2019
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card sx={{ minHeight: 100 }}>
            <CardHeader title="Narayana PU College" subheader="PCMC" />
            <CardContent style={{ color: "#a9c3de" }}>
              June 2013 - June 2015
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}

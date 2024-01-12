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

      <Card sx={{ minHeight: 100 }}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <CardHeader
              title="Dayananda Sagar Institutions"
              subheader="B.E in Mechanical Engineering"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <CardContent style={{ color: "#a9c3de", float: "right" }}>
              August 2015 - August 2019
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Fragment>
  );
}

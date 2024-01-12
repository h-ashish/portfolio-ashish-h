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
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ minHeight: 100 }}>
            <CardHeader
              title="Dayananda Sagar Institutions"
              subheader="BE in Mechanical Engineering"
              action={
                <CardContent style={{ color: "#a9c3de" }}>
                  August 2015 - August 2019
                </CardContent>
              }
            />
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}

import React, { Fragment } from "react";
import { Container, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Introduction from "./Introduction";
import Header from "./Header";
import CardDetails from "./CardDetails";
import Technologies from "./Technologies";
import MyWorks from "./MyWorks";
import MyEducation from "./MyEducation";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  dividerSpacing: {
    margin: theme.spacing(3, 0),
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <Fragment>
      <Header />
      <Container maxWidth="false" style={{ maxWidth: "82%" }}>
        <Introduction />
        <Divider className={classes.dividerSpacing} />
        <CardDetails />
        <Divider className={classes.dividerSpacing} />
        <Technologies />
        <Divider className={classes.dividerSpacing} />
        <MyWorks />
        <Divider className={classes.dividerSpacing} />
        <MyEducation />
      </Container>{" "}
      <Footer />
    </Fragment>
  );
}

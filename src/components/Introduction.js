import React, { Fragment } from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ashishpic from "../assets/images/ashishpic.jpeg";

const useStyles = makeStyles((theme) => ({
  fragContainer: {
    margin: "0px 0 0 0",
  },
  imageHolder: {
    maxWidth: "150px",
    maxHeight: "150px",
    margin: "0 0 0 10px",
  },
  spanStyles: {
    fontSize: "3.1rem",
    fontWeight: "bold",
    marginTop: "20px",
    color: "#a9c3de",
  },
  descTypo: {
    marginTop: "20px",
    justifyContent: "center",
  },
  anchorStyles: {
    textDecoration: "none",
    color: "#61DBFB",
  },
}));

export default function Introduction() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container className={classes.fragContainer}>
        <Grid item lg={9} md={9} sm={9} xs={9}>
          <Typography variant="h1">
            {" "}
            Hey! I'm Ashish H.
            <br />{" "}
          </Typography>
          <Typography variant="h1" className={classes.spanStyles}>
            I build things for the Web.
          </Typography>
        </Grid>
        <Grid item lg={3} md={3} sm={9} xs={3}>
          <div className={classes.imageHolder} style={{ float: "right" }}>
            <img
              src={ashishpic}
              alt="Profile image"
              width="100%"
              height="100%"
            />
          </div>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Typography variant="h3" className={classes.descTypo}>
            Detail-oriented Software Engineer with 2.5 years in front-end
            development, excelling in crafting responsive user interfaces and
            collaborating with cross-functional teams to deliver high-quality
            software solutions. Currently focused on translating business
            requirements into code modules and software solutions at{" "}
            <a
              href="https://www.accolite.com/"
              className={classes.anchorStyles}
            >
              Accolite.
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
}

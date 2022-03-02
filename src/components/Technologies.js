import React, { Fragment } from "react";
import { Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import html from "../assets/logos/HTML5.svg";
import css from "../assets/logos/CSS3.svg";
import js from "../assets/logos/JS.svg";
import react from "../assets/logos/REACT.svg";
import mui from "../assets/logos/MUI.svg";
import firebase from "../assets/logos/FIREBASE.svg";
import nodejs from "../assets/logos/NODEJS.svg";
import express from "../assets/logos/EXPRESS.svg";
import mongodb from "../assets/logos/MONGODB.svg";
import bootstrap from "../assets/logos/BOOTSTRAP.svg";
import redux from "../assets/logos/REDUX.svg";

const useStyles = makeStyles((theme) => ({
  logoHolder: {
    minHeight: "40px",
    maxWidth: "40px",
    maxHeight: "40px",
    display: "flex",
    textAlign: "center",
    margin: "auto",
  },
  widerImageHolder: {
    minHeight: "40px",
    maxWidth: "100px",
    maxHeight: "40px",
    display: "flex",
    textAlign: "center",
    margin: "auto",
  },
  headings: {
    margin: theme.spacing(5, 0, 3, 0),
  },
}));

export default function Technologies() {
  const classes = useStyles();
  const goodAtIcons = [html, css, js, react, mui, firebase];
  const familiarWithIcons = [nodejs, express, mongodb, bootstrap, redux];
  return (
    <Fragment>
      <Typography variant="h1" className={classes.headings}>
        I'm Good At
      </Typography>
      <Grid container spacing={2}>
        {goodAtIcons.map((icon, index) => {
          return (
            <Grid item lg={2} md={4} sm={4} xs={4} key={index}>
              <div className={classes.logoHolder}>
                <img src={icon} alt="Technology" width="100%" />
              </div>
            </Grid>
          );
        })}
      </Grid>
      <Typography variant="h1" className={classes.headings}>
        I'm Familiar With
      </Typography>
      <Grid container spacing={2}>
        {familiarWithIcons.map((icon, index) => {
          return (
            <Grid item lg={2} md={4} sm={4} xs={4} key={index}>
              <div className={classes.widerImageHolder}>
                <img src={icon} alt="Technology" width="100%" />
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
}

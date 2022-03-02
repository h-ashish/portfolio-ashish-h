import React, { Fragment } from "react";
import { Paper, Typography, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    padding: theme.spacing(1, 0),
    marginTop: theme.spacing(5),
  },
  footerImage: {
    maxWidth: "70px",
  },
  footerDisplay: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "20px",
  },
  anchorStyles: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      color: "#61DBFB",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Fragment>
      <Paper className={classes.footerContainer}>
        <Grid container spacing={2}>
          <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
        </Grid>
        <Container className={classes.footerDisplay} maxWidth="md">
          <a
            className={classes.anchorStyles}
            href="https://www.linkedin.com/in/ashish-h/"
            target="_blank"
          >
            {" "}
            <LinkedInIcon />
          </a>
          <a
            className={classes.anchorStyles}
            href="https://github.com/h-ashish"
            target="_blank"
          >
            {" "}
            <GitHubIcon />
          </a>
          <a
            className={classes.anchorStyles}
            href="mailto:ashishkalburgi90@gmail.com"
            target="_blank"
          >
            {" "}
            <EmailIcon />
          </a>
        </Container>
        <Typography textAlign="center" marginBottom={2}>
          Built with <span style={{ color: "red" }}> ♥ </span>by Ashish H
        </Typography>
      </Paper>
    </Fragment>
  );
}

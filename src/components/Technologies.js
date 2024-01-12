import React, { Fragment } from "react";
import { Typography, Grid, Chip, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import html from "../assets/logos/HTML5.svg";
import css from "../assets/logos/CSS3.svg";
import js from "../assets/logos/JS.svg";
import react from "../assets/logos/REACT.svg";
import mui from "../assets/logos/MUI.svg";
import firebase from "../assets/logos/FIREBASE.svg";
import typescript from "../assets/logos/TYPESCRIPT.svg";
import java from "../assets/logos/JAVA.svg";
import spring from "../assets/logos/SPRING.svg";
import jest from "../assets/logos/JEST.svg";
import nxreact from "../assets/logos/NXREACT.png";
import nodejs from "../assets/logos/NODEJS.svg";
import nextjs from "../assets/logos/NEXTJS.svg";
import express from "../assets/logos/EXPRESS.svg";
import mongodb from "../assets/logos/MONGODB.svg";
import bootstrap from "../assets/logos/BOOTSTRAP.svg";
import tailwind from "../assets/logos/TAILWIND.svg";
import aggrid from "../assets/logos/AGGRID.png";
import apexchart from "../assets/logos/APEXCHARTS.png";
import redux from "../assets/logos/REDUX.svg";
import cicd from "../assets/logos/CICD.svg";
import jenkins from "../assets/logos/JENKINS.svg";
import devops from "../assets/logos/DEVOPS.svg";
import swagger from "../assets/logos/SWAGGER.svg";
import postman from "../assets/logos/POSTMAN.svg";
import webpack from "../assets/logos/WEBPACK.svg";
import git from "../assets/logos/GIT.svg";
import figma from "../assets/logos/FIGMA.svg";
import scrum from "../assets/logos/SCRUM.svg";

const useStyles = makeStyles((theme) => ({
  logoHolder: {
    minHeight: "20px",
    maxWidth: "20px",
    maxHeight: "20px",
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
  chipstyles: {
    height: "35px",
    width: "",
  },
}));

export default function Technologies() {
  const classes = useStyles();
  const goodAtIcons = [
    {
      title: "HTML",
      icon: html,
    },
    {
      title: "CSS",
      icon: css,
    },
    {
      title: "Javascript",
      icon: js,
    },
    {
      title: "Typescript",
      icon: typescript,
    },
    {
      title: "ReactJS",
      icon: react,
    },
    {
      title: "Redux",
      icon: redux,
    },
    {
      title: "MaterialUI",
      icon: mui,
    },
    {
      title: "Tailwind CSS",
      icon: tailwind,
    },
    {
      title: "AgGrid",
      icon: aggrid,
    },
    {
      title: "ApexCharts",
      icon: apexchart,
    },
    {
      title: "React Jest",
      icon: jest,
    },
  ];
  const familiarWithIcons = [
    {
      title: "Java",
      icon: java,
    },
    {
      title: "Springboot",
      icon: spring,
    },
    {
      title: "Nodejs",
      icon: nodejs,
    },
    {
      title: "NextJs",
      icon: nextjs,
    },
    {
      title: "Express",
      icon: express,
    },
    {
      title: "Mongodb",
      icon: mongodb,
    },
    {
      title: "NxReact",
      icon: nxreact,
    },
    {
      title: "Bootstrap",
      icon: bootstrap,
    },
    {
      title: "Firebase",
      icon: firebase,
    },
    {
      title: "CI/CD",
      icon: cicd,
    },
    {
      title: "Jenkins",
      icon: jenkins,
    },
    {
      title: "Devops",
      icon: devops,
    },
    {
      title: "Swagger UI",
      icon: swagger,
    },
    {
      title: "Postman",
      icon: postman,
    },
    {
      title: "Webpack",
      icon: webpack,
    },
    {
      title: "GIT",
      icon: git,
    },
    {
      title: "Figma",
      icon: figma,
    },
    {
      title: "Scrum",
      icon: scrum,
    },
  ];
  return (
    <Fragment>
      <Typography variant="h1" className={classes.headings}>
        I'm Good At
      </Typography>
      <Grid container spacing={2}>
        {goodAtIcons.map((val, index) => {
          return (
            <Grid item lg={2} md={4} sm={4} xs={"auto"} key={index}>
              <Chip
                label={val.title}
                className={classes.chipstyles}
                avatar={
                  <Avatar
                    alt="Image"
                    src={val.icon}
                    className={classes.logoHolder}
                  />
                }
              />
            </Grid>
          );
        })}
      </Grid>
      <Typography variant="h1" className={classes.headings}>
        I'm Familiar With
      </Typography>
      <Grid container spacing={2}>
        {familiarWithIcons.map((val, index) => {
          return (
            <Grid item lg={2} md={4} sm={4} xs={"auto"} key={index}>
              <Chip
                label={val.title}
                className={classes.chipstyles}
                avatar={
                  <Avatar
                    alt="Image"
                    src={val.icon}
                    className={classes.logoHolder}
                  />
                }
              />
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
}

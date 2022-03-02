import React, { Fragment, useState } from "react";
import {
  Grid,
  Typography,
  IconButton,
  Card,
  Box,
  CardHeader,
  CardContent,
  Collapse,
  CardActions,
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles((theme) => ({
  anchorStyles: {
    textDecoration: "none",
    color: "#61DBFB",
  },
  boxStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardDetails() {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Fragment>
      <Typography variant="h1" marginBottom={2}>
        Work Experience
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card sx={{ minHeight: 150 }}>
            <CardContent>
              <Typography variant="h2">
                Software Developer <br />
                <a
                  href="https://resoluteai.in/"
                  className={classes.anchorStyles}
                >
                  @ResoluteAI.in
                </a>
              </Typography>
              <Box className={classes.boxStyle}>
                <Typography variant="h3" marginTop={2}>
                  July 2021 - Present
                </Typography>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  style={{ marginTop: "15px" }}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </Box>
            </CardContent>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent style={{ color: "#a9c3de" }}>
                <ul>
                  <li>
                    Architected, Designed, Developed and Deployed highly
                    interactive dashboards for clients with Firebase and ReactJs
                    single handedly.
                  </li>
                  <li>
                    Developed and deployed a ticketing management system for a
                    client which let users of our AI products raise tickets for
                    support with ReactJS, Material UI and Firebase.
                  </li>
                  <li>
                    Engineered and maintained major features of our AI product -
                    Facegenie, using ReactJs, Material UI and Firebase.
                  </li>
                </ul>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card sx={{ minHeight: 150 }}>
            <CardContent>
              <Typography variant="h2">
                Web Development Intern
                <br />
                <a
                  href="https://www.thesparksfoundationsingapore.org/"
                  className={classes.anchorStyles}
                >
                  @The Sparks Foundation
                </a>
              </Typography>
              <Box className={classes.boxStyle}>
                <Typography variant="h3" marginTop={2}>
                  June 2021 - July 2021
                </Typography>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  style={{ marginTop: "15px" }}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </Box>
            </CardContent>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent style={{ color: "#a9c3de" }}>
                <ul>
                  <li>
                    Designed, Developed and Deployed a fullstack (MERN Stack)
                    Basic Banking System Website with basic functionality, and
                    responsive UI.
                  </li>
                  <li>
                    Used Technologies like HTML, CSS, JavaScript. ReactJS,
                    Express, NodeJS and MongoDB. The Website was successfully
                    hosted online on Heroku.
                  </li>
                </ul>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card sx={{ minHeight: 150 }}>
            <CardContent>
              <Typography variant="h2">
                Web Development Trainee
                <br />
                <a
                  href="https://www.thesparksfoundationsingapore.org/"
                  className={classes.anchorStyles}
                >
                  @Zenrays Technologies
                </a>
              </Typography>
              <Box className={classes.boxStyle}>
                <Typography variant="h3" marginTop={2}>
                  Jan 2021 - May 2021
                </Typography>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  style={{ marginTop: "15px" }}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </Box>
            </CardContent>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent style={{ color: "#a9c3de" }}>
                <ul>
                  <li>Full Stack (MERN) Web Development training program.</li>
                  <li>
                    Designed and Developed a game website by converting mockups
                    into usable web presence using HTML, CSS and JavaScript
                    coding.
                  </li>
                  <li>
                    Designed and developed a front-end credit card website using
                    ReactJS.
                  </li>
                </ul>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card sx={{ minHeight: 150 }}>
            <CardContent>
              <Typography variant="h2">
                Trainee Engineer
                <br />
                <a
                  href="https://www.quest-global.com/"
                  className={classes.anchorStyles}
                >
                  @QuEST Global
                </a>
              </Typography>
              <Box className={classes.boxStyle}>
                <Typography variant="h3" marginTop={2}>
                  Nov 2019 - Nov 2020
                </Typography>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  style={{ marginTop: "15px" }}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </Box>
            </CardContent>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent style={{ color: "#a9c3de" }}>
                <ul>
                  <li>
                    Read and interpreted blueprints, technical drawings,
                    schematics, computer generated reports and also responsible
                    for project documentation.
                  </li>
                </ul>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}

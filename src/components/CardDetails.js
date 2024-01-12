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
        Professional Experience
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card sx={{ minHeight: 150 }}>
            <CardContent>
              <Typography variant="h2">
                Senior Software Engineer <br />
                <a
                  href="https://www.accolite.com/"
                  className={classes.anchorStyles}
                >
                  @Accolite
                </a>
              </Typography>
              <Box className={classes.boxStyle}>
                <Typography variant="h3" marginTop={2}>
                  May 2022 - Present
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
                    Revamped a legacy micro frontend app using ReactJS, Ag Grid;
                    boosted readability by 60%, integrated APIs, automated
                    deployment via CI/CD pipelines; analyzed code quality and
                    security with Sonarqube.
                  </li>
                  <li>
                    Led migration of user preferences feature to a stable,
                    standardized microservice, achieving an 80% decrease in
                    maintainability.
                  </li>
                  <li>
                    Collaborated on enhancing telecommunications order tracking
                    page: integrated APIs for a 70% performance boost,
                    implemented designs using NextJS, styled-components, and a
                    custom UI framework.
                  </li>
                  <li>
                    Generated test cases for the micro frontends using React
                    Jest, which improved code test coverage to 65%
                  </li>
                  <li>
                    Synchronized with product owners to enhance UI/UX by
                    creating new microservices APIs for container widgets,
                    resulting in a 45% improvement in data interpretation.
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
                  July 2021 - April 2022
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
                    Oversaw and guided a team of 3 in creating Staffing
                    Management Software, boosting efficiency by 50% and halving
                    deployment duration.
                  </li>
                  <li>
                    Partnered with Machine Learning Engineers to craft an
                    analytics dashboard for a textile client, elevating data
                    readability and interpretation by 35%.
                  </li>
                  <li>
                    Supervised and upheld key features of the AI product
                    "Facegenie" while concurrently managing multiple projects
                    for three distinct clients.
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
                    Orchestrated the development of a full stack (MERN Stack)
                    Banking System Website with account management, money
                    transfer features, and a responsive, user-friendly UI.
                  </li>
                  <li>
                    Executed the development of the banking system website and
                    achieved a seamless deployment on the Heroku platform.
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
                    Analyzed blueprints, technical drawings, and schematics,
                    offering design solutions and documentation for an aircraft
                    manufacturing client, resulting in a notable 12% reduction
                    in manufacturing mean time.
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

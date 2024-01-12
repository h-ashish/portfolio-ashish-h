import React, { Fragment } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  Chip,
  Tooltip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import analyticsdashboard from "../assets/images/analyticsdashboard.png";
import redstore from "../assets/images/redstore.png";
import webdevapp from "../assets/images/webdevapp.png";
import basicbankingapp from "../assets/images/basicbankingapp.png";
import quizapp from "../assets/images/quizapp.png";
import guessthenumber from "../assets/images/guessthenumber.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const usestyles = makeStyles((theme) => ({
  anchorStyles: {
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      color: "#61DBFB",
    },
  },
}));

export default function MyWorks() {
  const classes = usestyles();
  const projectDetails = [
    {
      projectTitle: "Analytics Dashboard",
      projectImage: analyticsdashboard,
      projectDescription:
        "Developed a highly interactive and complex dashboard for a textile manufacturing company. The dashboard features different kinds of graphs and visual representation of data.",
      projectLink: "https://analytics-dashboard.web.app/",
      projectTechnologies: [
        "ReactJS",
        "Material UI",
        "Material UI Icons",
        "React Apexcharts",
        "Firebase",
      ],
    },
    {
      projectTitle: "Redstore Ecommerce",
      projectImage: redstore,
      projectDescription:
        "This is a Ecommerce Website built using ReactJS, Redux, React-Redux, Bootstrap and Firebase. The website features product viewing and adding to cart",
      projectLink: "https://redstoreecommerce.web.app/",
      projectTechnologies: [
        "ReactJS",
        "Redux",
        "React-Redux",
        "Bootstrap",
        "Firebase",
      ],
    },
    {
      projectTitle: "Basic Banking App",
      projectImage: basicbankingapp,
      projectDescription:
        "Developed a Basic Banking System Website built with MERN Technologies. The functionalities include adding user, viewing list of users, transferring money between users, viewing transaction history and responsive UI.",
      projectLink: "https://grip-bank-app.herokuapp.com/#/",
      projectTechnologies: [
        "ReactJS",
        "MongoDB",
        "ExpressJS",
        "NodeJs",
        "Heroku",
      ],
    },
    {
      projectTitle: "Web Dev Website",
      projectImage: webdevapp,
      projectDescription:
        "Developed a Web Design and Development Company Website built using ReactJS, Javascript, HTML and CSS. The website features amazing UI and is responsive on different devices.",
      projectLink: "https://web-development-website.vercel.app/",
      projectTechnologies: ["ReactJS", "Javascript", "HTML5", "CSS3"],
    },

    {
      projectTitle: "Quiz App",
      projectImage: quizapp,
      projectDescription:
        "This is a quiz-app designed and developed with ReactJS. This website focuses on customer friendly and a responsive experience. It comes with a timer feature which automatically exits the quiz after the time is up.",
      projectLink: "https://h-ashish.github.io/quiz-app/",
      projectTechnologies: ["ReactJS", "Javascript", "HTML5", "CSS3"],
    },
    {
      projectTitle: "Guess the Number Game",
      projectImage: guessthenumber,
      projectDescription:
        "Designed and developed a game using HTML5, CSS3 and JavaScript where the user has to guess a number between 1-20 and based on the correct guess the score is increased by one and also along with the high score. ",
      projectLink: "https://h-ashish.github.io/guess-the-number/",
      projectTechnologies: ["Javascript", "HTML5", "CSS3"],
    },
  ];
  return (
    <Fragment>
      <Typography variant="h1" marginBottom={2}>
        Work
      </Typography>
      <Grid container spacing={2}>
        {projectDetails.map((dets, index) => {
          return (
            <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
              <Card style={{ minHeight: "530px" }}>
                <CardHeader
                  action={
                    <Tooltip title="View Webapp">
                      <IconButton aria-label="settings">
                        <a
                          className={classes.anchorStyles}
                          href={dets.projectLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <OpenInNewIcon fontSize="small" />
                        </a>
                      </IconButton>
                    </Tooltip>
                  }
                  title={dets.projectTitle}
                  titleTypographyProps={{ variant: "h2" }}
                />
                <CardMedia
                  component="img"
                  image={dets.projectImage}
                  alt="analytics dashboard"
                />
                <CardContent>
                  <Typography
                    variant="body1"
                    marginBottom={2}
                    style={{ color: "#a9c3de" }}
                  >
                    {dets.projectDescription}
                  </Typography>
                  {dets.projectTechnologies.map((techs, index) => {
                    return (
                      <Chip
                        style={{ margin: "4px" }}
                        label={techs}
                        key={index}
                      />
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
}

import { AppBar, Toolbar, IconButton, Tooltip } from "@mui/material";
import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import AshishResume from "../assets/AshishHResume.pdf";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const useStyles = makeStyles((theme) => ({
  mainHeader: {
    background: "transparent",
    boxShadow: "none",
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

export default function Header() {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar className={classes.mainHeader} position="sticky">
        <Toolbar style={{ justifyContent: "right" }}>
          <Tooltip title="Download Resume">
            <IconButton>
              <a
                href={AshishResume}
                download="Ashish H Resume"
                className={classes.anchorStyles}
              >
                <CloudDownloadIcon />
              </a>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

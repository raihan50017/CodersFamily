import {
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import CodeIcon from "@material-ui/icons/Code";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SearchIcon from "@material-ui/icons/Search";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const styles = makeStyles((theme) => ({
  serviceSection: {
    paddingTop: "105px",
    paddingBottom: "52px",
    paddingRight: "79px",
    paddingLeft: "79px",
  },
  ourServiceTitle: {
    "& h2": {
      textAlign: "center",
      color: "#222222",
      fontWeight: "500",
      fontSize: "40px",
      lineHeight: "52px",
      textTransform: "capitalize",
      marginBottom: "20px",
    },
  },
  ousServiceDescription: {
    paddingRight: "23%",
    paddingLeft: "23%",
    textAlign: "center",
    lineHeight: "29px",
    fontSize: "17px",
    color: "#666666",
    fontWeight: "400",
  },
  serviceCardSection: {
    paddingTop: "38px",
  },
  cardContent: {
    textAlign: "left",
    background: "rgba(255, 255, 255, 0.90)",
    padding: "40px 35px 30px 37px",
    height: "100%",
  },
  cardImage: {
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.80)",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      maxWidth: "300px",
    },
  },
  cardIconWrapper: {
    padding: "30px",
    border: "2px solid #f35444",
    "&:hover": {
      "& svg": {
        color: "#f35444",
      },
    },
  },
  cardWrap: {
    padding: "10px",
  },
  cardTitle: {
    color: "#222222",
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: "700",
    textAlign: "left",
    marginTop: "20px",
    marginBottom: "2px",
  },
  cardDescription: {
    paddingTop: "7px",
    lineHeight: "1.7em",
    fontSize: "17px",
    color: "#666666",
    fontWeight: "400",
  },
  arrowIconWrap: {
    transition: "all .3s ease",
    "&:hover": {
      color: "#f35444",
    },
  },
}));

const OurServices = () => {
  const classes = styles();
  return (
    <div className={classes.serviceSection}>
      <div className={classes.ourServiceTitle}>
        <Typography variant="h2">Our It Services</Typography>
      </div>
      <Typography
        className={classes.ousServiceDescription}
        variantMapping={{ p: "p" }}
        variant="p"
      >
        We offer professional web design services at affordable rates to help
        your business attract more visitors and keep them on your site!
      </Typography>
      <div className={classes.serviceCardSection}>
        <Grid container>
          <Grid md={6} className={classes.cardWrap}>
            <Paper className={classes.cardContent}>
              <Grid container style={{ flexGrow: "1", alignItems: "center" }}>
                <Grid xs={10}>
                  <IconButton className={classes.cardIconWrapper}>
                    <CodeIcon></CodeIcon>
                  </IconButton>
                </Grid>
                <Grid xs={2}>
                  <IconButton className={classes.arrowIconWrap}>
                    <ArrowForwardIcon></ArrowForwardIcon>
                  </IconButton>
                </Grid>
                <Typography className={classes.cardTitle} variant="h4">
                  Web Development
                </Typography>
                <Typography
                  className={classes.cardDescription}
                  variantMapping={{ p: "p" }}
                  variant="p"
                >
                  We start from structuring information architecture and mapping
                  out functionalities. We start from structuring information
                  architecture and mapping out functionalities.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid className={classes.cardWrap} md={6}>
            <div className={classes.cardImage}>
              <img alt="" src=".././images/services/web-development.jpg"></img>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid className={classes.cardWrap} md={6}>
            <div className={classes.cardImage}>
              <img alt="" src=".././images/services/seo-analysis.jpg"></img>
            </div>
          </Grid>
          <Grid md={6} className={classes.cardWrap}>
            <Paper className={classes.cardContent}>
              <Grid container style={{ flexGrow: "1", alignItems: "center" }}>
                <Grid xs={10}>
                  <IconButton className={classes.cardIconWrapper}>
                    <SearchIcon></SearchIcon>
                  </IconButton>
                </Grid>
                <Grid xs={2}>
                  <IconButton className={classes.arrowIconWrap}>
                    <ArrowForwardIcon></ArrowForwardIcon>
                  </IconButton>
                </Grid>
                <Typography className={classes.cardTitle} variant="h4">
                  Seo Analysis
                </Typography>
                <Typography
                  className={classes.cardDescription}
                  variantMapping={{ p: "p" }}
                  variant="p"
                >
                  We start from structuring information architecture and mapping
                  out functionalities. We start from structuring information
                  architecture and mapping out functionalities.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={6} className={classes.cardWrap}>
            <Paper className={classes.cardContent}>
              <Grid container style={{ flexGrow: "1", alignItems: "center" }}>
                <Grid xs={10}>
                  <IconButton className={classes.cardIconWrapper}>
                    <ArtTrackIcon></ArtTrackIcon>
                  </IconButton>
                </Grid>
                <Grid xs={2}>
                  <IconButton className={classes.arrowIconWrap}>
                    <ArrowForwardIcon></ArrowForwardIcon>
                  </IconButton>
                </Grid>
                <Typography className={classes.cardTitle} variant="h4">
                  UI/UX Design
                </Typography>
                <Typography
                  className={classes.cardDescription}
                  variantMapping={{ p: "p" }}
                  variant="p"
                >
                  We start from structuring information architecture and mapping
                  out functionalities. We start from structuring information
                  architecture and mapping out functionalities.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid className={classes.cardWrap} md={6}>
            <div className={classes.cardImage}>
              <img alt="" src=".././images/services/ui-ux-design.jpg"></img>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid className={classes.cardWrap} md={6}>
            <div className={classes.cardImage}>
              <img alt="" src=".././images/services/it-support.jpg"></img>
            </div>
          </Grid>
          <Grid md={6} className={classes.cardWrap}>
            <Paper className={classes.cardContent}>
              <Grid container style={{ flexGrow: "1", alignItems: "center" }}>
                <Grid xs={10}>
                  <IconButton className={classes.cardIconWrapper}>
                    <HelpOutlineIcon></HelpOutlineIcon>
                  </IconButton>
                </Grid>
                <Grid xs={2}>
                  <IconButton className={classes.arrowIconWrap}>
                    <ArrowForwardIcon></ArrowForwardIcon>
                  </IconButton>
                </Grid>
                <Typography className={classes.cardTitle} variant="h4">
                  It Support
                </Typography>
                <Typography
                  className={classes.cardDescription}
                  variantMapping={{ p: "p" }}
                  variant="p"
                >
                  We start from structuring information architecture and mapping
                  out functionalities. We start from structuring information
                  architecture and mapping out functionalities.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default OurServices;

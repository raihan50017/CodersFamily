import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Link as RouteLink } from "react-router-dom";

const styles = makeStyles((theme) => ({
  bannnerSection: {
    paddingTop: "105px",
    paddingBottom: "52px",
    textAlign: "center",
    color: "white",
    background:
      "#151823 url(https://demo26.atiframe.com/wp-admin/admin-ajax.php?action=kc_get_thumbn&type=filter_url&id=%2Fwp-content%2Fuploads%2F2020%2F02%2FCREATIVE_.png) top left/cover no-repeat scroll",
  },
  bannserTitle: {
    color: "#ffffff",
    fontSize: "56px",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: "64px",
    position: "relative",
    paddingBottom: "15px",
    "&:before": {
      position: "absolute",
      content: "''",
      display: "block",
      top: "0",
      transition: "all 400ms",
      backgroundColor: "#f35444",
      borderRadius: "5px 5px 5px 5px",
      width: "3px",
      height: "40px",
      marginTop: "-57px",
      left: "49%",
    },
  },
  breadcrumbs: {
    textAlign: "center",
    paddingTop: "11px",
    zIndex: "1",
    color: "#7e8399",
    textTransform: "capitalize",
    lineHeight: "24px",
    "& a": {
     
    },
  },
  previous: {
    "&:hover": {
      color: "white",
    },
  },
  current: {
    
  },
  divider: {
    margin: "0px 5px",
    fontSize: "17px",
  },
}));

const ServiceBanner = () => {
  const classes = styles();

  return (
    <div>
      <div className={classes.bannnerSection}>
        <Typography className={classes.bannserTitle} variant="h3">
          <span>Services</span>
        </Typography>
        <div className={classes.breadcrumbs}>
          <Typography
            className={classes.previous}
            variantMapping={{ a: "a" }}
            variant="a"
          >
            <RouteLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/"
            >
              Home
            </RouteLink>
          </Typography>
          <span className={classes.divider}>/</span>
          <span className={classes.current}>Service</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;

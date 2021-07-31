import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Button, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as RouteLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  mainNav: {
    justifyContent: "space-between",
    position: "relative",
    minHeight: "110px",
    [theme.breakpoints.down("md")]: {
      display: "block",
      paddingTop: "10px",
    },
  },
  dropIconButton: {
    padding: "5px",
    "&:hover": {
      backgroundColor: "inherit",
    },
  },
  navMenu: {
    transition: "all .5s ease",
  },
  navItem: {
    display: "inline-block",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
    "&:hover": {
      color: "#009fdb",
    },
  },
  navLink: {
    padding: "14px 16px",
    fontSize: "17px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "all .2s linear",
  },
  menuButton: {
    position: "absolute",
    display: "none",
    right: "30px",
    top: "0px",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  dropDown: {
    position: "relative",
    "&:hover": {
      "& .dropdown-content": {
        display: "block",
      },
    },
  },
  dropDownContent: {
    display: "none",
    position: "absolute",
    backgroundColor: "#f9f9f9",
    minWidth: "240px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: "1",
    [theme.breakpoints.down("md")]: {
      position: "relative",
    },
    "& a": {
      float: "none",
      color: "black",
      padding: "12px 16px",
      textDecoration: "none",
      fontSize: "17px",
      display: "block",
      textAlign: "left",
      cursor: "pointer",
      transition: "all .3s ease",
      borderTop: "1px solid #eaeaea",
      "&:hover": {
        backgroundColor: "#ddd",
        color: "black",
      },
    },
  },
  getquote: {
    "& a": {
      color: "#ffffff",
      backgroundColor: "rgba(255, 255, 255, 0)",
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: "500",
      textDecoration: "none",
      border: "2px solid #f35444",
      borderRadius: "50px 50px 50px 50px",
      padding: "10px 50px 10px 50px",
      position: "relative",
      display: "inline-block",
      transition: "all 300ms ease-in",
      overflow: "hidden",
      cursor: "pointer",
      "&:hover": {
        color: "#ffffff",
        backgroundColor: "#f35444",
        border: "2px solid #f35444",
      },
    },
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 88,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      position: trigger ? "fixed" : "relative",
      backgroundColor: "#151823",
      marginTop: trigger ? "0px" : "-100px",
      transition: trigger ? "all .6s ease-in-out" : "",
      borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
      paddingRight: "8%",
      paddingLeft: "8%",
    },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960 ? setOpen(false) : setOpen(true);
    };
    setResponsiveness();
  }, []);

  const {
    mainNav,
    dropIconButton,
    navLink,
    navItem,
    dropDown,
    dropDownContent,
    menuButton,
    navMenu,
    getquote,
  } = useStyles();

  return (
    <React.Fragment>
      <div style={{ height: "100px", backgroundColor: "#151823" }}></div>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={mainNav}>
            <Typography variant="h6" noWrap>
              <img
                style={{ width: "200px" }}
                alt=""
                src="../../brand-logo.png"
              ></img>
            </Typography>
            {open && (
              <Box className={navMenu}>
                <Box className={navItem}>
                  <Typography
                    className={navLink}
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
                </Box>
                <Box className={navItem}>
                  <Typography
                    className={navLink}
                    variantMapping={{ a: "a" }}
                    variant="a"
                  >
                    <RouteLink
                      style={{ textDecoration: "none", color: "inherit" }}
                      to="/our-services"
                    >
                      Service
                    </RouteLink>
                  </Typography>
                </Box>
                <Box className={navItem}>
                  <Typography
                    className={navLink}
                    variantMapping={{ a: "a" }}
                    variant="a"
                  >
                    <RouteLink
                      style={{ textDecoration: "none", color: "inherit" }}
                      to="/about"
                    >
                      About Us
                    </RouteLink>
                  </Typography>
                </Box>
                <Box className={navItem}>
                  <Typography
                    className={navLink}
                    variantMapping={{ a: "a" }}
                    variant="a"
                  >
                    <RouteLink
                      style={{ textDecoration: "none", color: "inherit" }}
                      to="/contact-us"
                    >
                      Contact Us
                    </RouteLink>
                  </Typography>
                </Box>
                {/* <Box className={`${navItem} ${dropDown}`}>
                  <Typography
                    className={navLink}
                    variantMapping={{ a: "a" }}
                    variant="a"
                  >
                    SERVICES
                    <IconButton className={dropIconButton} color="inherit">
                      <ExpandMoreIcon></ExpandMoreIcon>
                    </IconButton>
                  </Typography>
                  <Box className={`${dropDownContent} dropdown-content`}>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Banking Solution
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Mobile App Development
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      E-commerce Solution
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Cloud And Cyber Security
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Buciness Intelligence
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      ML & AI
                    </Typography>
                  </Box>
                </Box> */}
                {/* <Box className={`${navItem} ${dropDown}`}>
                  <Typography
                    className={navLink}
                    variantMapping={{ a: "a" }}
                    variant="a"
                  >
                    INDUSTRIES
                    <IconButton className={dropIconButton} color="inherit">
                      <ExpandMoreIcon></ExpandMoreIcon>
                    </IconButton>
                  </Typography>
                  <Box className={`${dropDownContent} dropdown-content`}>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Fintech
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Telecom
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Education
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Halthcare
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      E-commerce
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Startup
                    </Typography>
                  </Box>
                </Box>
                <Box className={navItem}>
                  <Typography
                    className={navLink}
                    variantMapping={{ a: "a" }}
                    variant="a"
                  >
                    BLOG
                  </Typography>
                </Box>

                <Box className={`${navItem} ${dropDown}`}>
                  <Typography
                    className={navLink}
                    variantMapping={{ a: "a" }}
                    variant="a"
                  >
                    ABOUT
                    <IconButton className={dropIconButton} color="inherit">
                      <ExpandMoreIcon></ExpandMoreIcon>
                    </IconButton>
                  </Typography>
                  <Box className={`${dropDownContent} dropdown-content`}>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      About Us
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Our Partners
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Media
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Career
                    </Typography>
                  </Box>
                </Box>

                <Box className={navItem}>
                  <Typography
                    className={navLink}
                    variantMapping={{ a: "a" }}
                    variant="a"
                  >
                    CONTACT US
                  </Typography>
                </Box> */}
              </Box>
            )}
            <IconButton
              className={menuButton}
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleToggle}
            >
              <MenuIcon />
            </IconButton>
            <div className={getquote}>
              <Typography variantMapping={{ a: "a" }} variant="a">
                Get quote
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};

export default Header;

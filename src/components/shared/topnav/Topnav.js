import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  topnav: {
    backgroundColor: "#21242e",
    color: "white",
    boxShadow: "none",
    paddingRight: "6%",
    paddingLeft: "6%",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  email: {
    display: "none",
    marginLeft: "20px",
    [theme.breakpoints.up("md")]: {
      display: "inline-block",
    },
  },
  topnavActiveIcon: {
    height: "6px",
    width: "6px",
    backgroundColor: "green",
    borderRadius: "50%",
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: "6px",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Topnav = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <TwitterIcon></TwitterIcon>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <LinkedInIcon></LinkedInIcon>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <InstagramIcon></InstagramIcon>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={`${classes.grow}`}>
      <AppBar position="static" className={classes.topnav}>
        <Toolbar>
          <div>
            <Typography
              className={classes.mobileNo}
              variantMapping={{ a: "a" }}
              variant="a"
            >
              <Typography
                className={classes.topnavActiveIcon}
                variant="body1"
              ></Typography>
              +8801726426154
            </Typography>
            <Typography
              className={classes.email}
              variantMapping={{ a: "a" }}
              variant="a"
            >
              <Typography
                className={classes.topnavActiveIcon}
                variant="body1"
              ></Typography>
              codersfamily2016@gmail.com
            </Typography>
          </div>
          <div className={classes.grow} />
          <Typography variantMapping={{ a: "a" }} variant="a">
            <Typography
              className={classes.topnavActiveIcon}
              variant="body1"
            ></Typography>
            Follow us:
          </Typography>
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <TwitterIcon></TwitterIcon>
            </IconButton>
            <IconButton color="inherit">
              <LinkedInIcon></LinkedInIcon>
            </IconButton>
            <IconButton color="inherit">
              <InstagramIcon></InstagramIcon>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Topnav;

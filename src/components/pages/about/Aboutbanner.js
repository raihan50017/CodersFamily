/* eslint-disable jsx-a11y/img-redundant-alt */
import {
    Box,
    Grid,
    IconButton,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import React from "react";


  const styles = makeStyles((theme) => ({
    AboutContainer: {
      paddingLeft: "79px",
      paddingRight: "79px",
      paddingTop: "45px",
      paddingBottom: "54px",
      fontSize: "40px",
    },
    Menu: {
      fontSize: "26px",
      marginTop: "12px",
      fontWeight: "500",
      "& a": {
        paddingBottom: "8px",
        display: "block",
        color: "#627792",
      },
    },
  }));
  
  const Aboutbanner = () => {
    const {AboutContainer,Menu} =
      styles();
    return (
      <React.Fragment>
        <Box className={AboutContainer}>
          <Grid container>
            <Grid xs={12} md={6}>
              <Typography style={{color: "black", fontSize: "46px", textAlign: "left", marginBottom: "0px"}} variant="h6">
              We Are <span style={{color: "orangered"}}>Professional</span>
              </Typography>
              <Typography style={{color: "black", fontSize: "46px", textAlign: "left", marginTop: "0px"}} variant="h6">
              Digital Team
              </Typography>
              <Typography style={{color: "black", fontSize: "26px", textAlign: "left", marginTop: "0px"}} variant="h6">
              Our web design company specializes in the professional creation of unique sites.
              </Typography>
              <Typography style={{color: "black", fontSize: "16px", textAlign: "left", marginTop: "0px"}} variant="h6">
              Our team constantly monitors the emergence of new technologies that we are not afraid to implement in web projects. We create only selling websites – this is an achievement by drawing the design and working out usability. The approach to each new project is individual, we treat every customer equally, regardless of the size of the company and its budget.
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
               <img
               alt="image"
               src="../../image/WA.PNG"
               />
            </Grid>
          </Grid>
        </Box>
      </React.Fragment>
    );
  };
  
  export default Aboutbanner;
  
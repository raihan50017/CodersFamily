/* eslint-disable no-unused-vars */
import {
    Box,
    Grid,
    IconButton,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import React from "react";
  import Paper from '@material-ui/core/Paper';
  

  const styles = makeStyles((theme) => ({
    counterContainer: {
      paddingLeft: "109px",
      paddingRight: "49px",
      paddingTop: "45px",
      paddingBottom: "54px",
      fontSize: "40px",
    },
    
  
  }));
  
  const Counter= () => {
    const {counterContainer} =
      styles();
    return (
      <React.Fragment>
        <Box className={counterContainer}>
          <Grid container >
            <Grid xs={12} md={3} style={{display: "flex"}}>
              <Typography style={{color: "black", fontSize: "26px", textAlign: "center", marginBottom: "0px"}} variant="h6">
              <h1>32 <span style={{color:"orangered"}}>+</span></h1>
              <h4>Profesional teams</h4>
              </Typography>
            </Grid>
            <Grid xs={12} md={3} style={{display: "flex"}}>
              <Typography style={{color: "black", fontSize: "26px", textAlign: "center", marginBottom: "0px"}} variant="h6">
              <h1>200 <span style={{color:"orangered"}}>+</span></h1>
              <h4>Satisfied customers</h4>
              </Typography>
            </Grid>
            <Grid xs={12} md={3} style={{display: "flex"}}>
              <Typography style={{color: "black", fontSize: "26px", textAlign: "center", marginBottom: "0px"}} variant="h6">
              <h1>175 <span style={{color:"orangered"}}>+</span></h1>
              <h4>Successful projects</h4>
              </Typography>
            </Grid>
            <Grid xs={12} md={3} style={{display: "flex"}}>
              <Typography style={{color: "black", fontSize: "26px", textAlign: "center", marginBottom: "0px"}} variant="h6">
              <h1>8 <span style={{color:"orangered"}}>+</span></h1>
              <h4>Years of experience</h4>
              </Typography>
            </Grid>
          </Grid>
       </Box>
      </React.Fragment>
    );
  };
  
  // eslint-disable-next-line no-undef
  export default Counter;
  
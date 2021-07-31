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
    TeamContainer: {
      paddingLeft: "79px",
      paddingRight: "79px",
      paddingTop: "45px",
      paddingBottom: "54px",
      fontSize: "40px",
    },
    Teammember: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(27),
          height: theme.spacing(46),
        },
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
  
  const Team= () => {
    const {TeamContainer,Teammember,Menu} =
      styles();
    return (
      <React.Fragment>
        <Box className={TeamContainer}>
          <Grid container>
            <Grid xs={12} md={12}>
              <Typography style={{color: "black", fontSize: "46px", textAlign: "center", marginBottom: "0px"}} variant="h6">
              Our Creative <span style={{color: "orangered"}}>Team</span>
              </Typography>
              <Typography style={{color: "black", fontSize: "16px", textAlign: "center", marginTop: "0px"}} variant="h6">
              We are committed to using fact-based knowledge and our unique brand of innovation to help
              </Typography>
              <Typography style={{color: "black", fontSize: "16px", textAlign: "center", marginTop: "0px"}} variant="h6">
              you dominate the competition.
              </Typography>
            </Grid>
          </Grid>
          <Grid>
          <div className={Teammember}>
      <Paper elevation={5}>
          <img src="../../TeamImage/team1.PNG" alt="" srcset="" />
      </Paper>
      <Paper> <img src="../../TeamImage/team2.PNG" alt="" srcset="" />
      </Paper>
      <Paper elevation={5}> <img src="../../TeamImage/team3.PNG" alt="" srcset="" /></Paper>
      <Paper> <img src="../../TeamImage/team4.PNG" alt="" srcset="" /></Paper>
      <Paper elevation={5}> <img src="../../TeamImage/team5.PNG" alt="" srcset="" /></Paper>
    </div>
          </Grid>
        </Box>
      </React.Fragment>
    );
  };
  
  // eslint-disable-next-line no-undef
  export default Team;
  
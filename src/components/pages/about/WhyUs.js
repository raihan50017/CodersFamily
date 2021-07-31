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
  import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GroupIcon from '@material-ui/icons/Group';

  const styles = makeStyles((theme) => ({
    WhyusContainer: {
      paddingLeft: "79px",
      paddingRight: "79px",
      paddingTop: "45px",
      paddingBottom: "54px",
      fontSize: "40px",
    },
    Whyus: {
        maxWidth: 445,
        display: "flex",
        marginLeft: "30px",
        flexWrap: "wrap",
      },
      media: {
        paddingLeft: "90px",
        paddingRight: "90px",
        height: 180,
        width: "670px",
        
        "& image":{
            height: "80px",
            width: "100%",

        }
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
  
  const WhyUs= () => {
    const {WhyusContainer,Whyus,Menu,media} =
      styles();
    return (
      <React.Fragment>
        <Box className={WhyusContainer}>
          <Grid container>
            <Grid xs={12} md={12}>
              <Typography style={{color: "black", fontSize: "46px", textAlign: "center", marginBottom: "0px"}} variant="h6">
              Why <span style={{color: "orangered"}}>Choose</span> Us
              </Typography>
              <Typography style={{color: "black", fontSize: "16px", textAlign: "center", marginTop: "0px"}} variant="h6">
              Biggest brands in the automotive industry recommend our company as a reliable
              </Typography>
              <Typography style={{color: "black", fontSize: "16px", textAlign: "center", marginTop: "0px"}} variant="h6">
              corporate website developer
              </Typography>
            </Grid>
            <Grid xs={12} md={4}>
          <Card className={Whyus}>
      <CardActionArea>
        <CardMedia
          className={media}
          image="../../whyus/bs1.PNG"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Big experience
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Many years of work in this field is an excellent indicator that companies trust us and in response we offer unique solutions.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid xs={12} md={4}>
    <Card className={Whyus}>
      <CardActionArea>
        <CardMedia
          className={media}
          image="../../whyus/bs2.PNG"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Strong team
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          An excellent team of professionals will help you to bring all your ideas to life in the best possible way and with flexible functionality.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid xs={12} md={4}>
    <Card className={Whyus}>
      <CardActionArea>
        <CardMedia
          className={media}
          image="../../whyus/bs3.PNG"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Personal solutions
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Individual approach to your project. flexible solutions for your tasks to achieve your goals on the path to success.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </Grid>
          </Grid>
         
          
        </Box>
      </React.Fragment>
    );
  };
  
  // eslint-disable-next-line no-undef
  export default WhyUs;
  
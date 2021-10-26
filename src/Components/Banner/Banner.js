import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";



const useStyles = makeStyles(()=> ({
  banner:{
    backgroundImage: "url(./banner5.jpg)",
    
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagLine: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}))


const Banner = () => {
  const classes = useStyles();
  return (
    <div className= {classes.banner}>
    <Container className={classes.bannerContent}>
    <div className={classes.tagLine}>
    <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "lightgreen",
            }}
          >
            Crypto Stalker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgray",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              
            }}
          >
            Stalk all the Info regarding your favorite Crypto Currency
          </Typography>
    </div>
            <Carousel/>
    </Container>

    </div>
  )
};

export default Banner;

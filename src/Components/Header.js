import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../features/cryptoSlice";
import { setSymbol } from "../features/symbolSlice";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    color: "white",
  },
  select: {
    width: 100,
    height: 40,
    marginLeft: 15,
    borderRadius: "10px",
    '&:focus': {
      
      borderColor: 'green',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.crypto.currency);

  useEffect(() => {
    if (currency === "INR") dispatch(setSymbol("₹"));
    else if (currency === "USD") dispatch(setSymbol("$"));
  }, [currency, dispatch]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              className={classes.title}
              onClick={() => history.push(`/`)}
              variant="h6"
            >
              Crypto Stalker
            </Typography>
            <Select
              variant="outlined"
              className={classes.select}
              onChange={(e) => dispatch(setCurrency(e.target.value))}
              value={currency}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;

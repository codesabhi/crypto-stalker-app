import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage"
import { makeStyles } from "@material-ui/core";

// styles using material UI
const useStyles = makeStyles({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
})

function App() {

  const classes = useStyles();

  return (
    <Router>
      <div className={classes.App}>
      <Header/>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/coins/:id">
            <CoinPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

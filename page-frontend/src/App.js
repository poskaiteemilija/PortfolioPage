import React from "react";
import Menu from "./Components/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./Components/Pages/About";

function App (){
    return(
        <Router>
            <Menu />
            <Switch>
                <Route path="/about" exact component={About} /> 
            </Switch>
        </Router>
    );
};

export default App;
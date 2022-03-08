import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GrassPage from "./components/GrassPage";
import ContactUs from "./components/ContactUs";
import Nav from "./components/layout/Nav";


function App() {
    return(
        <Router>
            <Nav />

            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/grass">
                        <GrassPage />
                    </Route>
                    <Route exact path="/contactus">
                        <ContactUs />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
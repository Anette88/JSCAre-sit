import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GrassPage from "./components/GrassPage";
import ContactUs from "./components/ContactUs";
import ContactUsSent from "./components/ContactUsSent";
import Nav from "./components/layout/Nav";
import CardSpecific from "./components/CardSpecific";
import "./sass/style.scss";
import Footer from "./components/layout/footer";


function App() {
    return(
        <Router>
            <Nav />

            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/detail/:id">
                        <CardSpecific />
                    </Route>
                    <Route exact path="/grass">
                        <GrassPage />
                    </Route>
                    <Route exact path="/contactus">
                        <ContactUs />
                    </Route>
                    <Route path="/contactussent">
							<ContactUsSent />
						</Route>
                </Switch>
            </div>
            
            <Footer />
        </Router>
        
    )
}

export default App;
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
    return (
        <div>
            <Router>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            This is the index page
                        </Route>
                        <Route exact path="/products">
                            This is the products page
                        </Route>
                        <Route exact path="/about-us">
                            This is the about-us page
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Views/Home";
import AboutUs from "./Components/Views/AboutUs";
import Products from "./Components/Views/Products";

function App() {
    return (
        <div>
            <Router>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/products">
                            <AboutUs />
                        </Route>
                        <Route exact path="/about-us">
                            <Products />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;

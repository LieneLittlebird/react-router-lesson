import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Views/Home";
import AboutUs from "./Components/Views/AboutUs";
import Products from "./Components/Views/Products";
import Product from "./Components/Views/Product";

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about-us">
                            <AboutUs />
                        </Route>
                        <Route path="/products">
                            <Products />
                        </Route>
                        <Route path="/product">
                            <Product />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
};

export default App;

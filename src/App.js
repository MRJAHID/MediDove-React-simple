import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import About from "./pages/About/About";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register.jsx";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/serviceDetails/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

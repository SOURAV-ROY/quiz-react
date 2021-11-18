import './App.css';
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {AuthProvider} from "../contexts/AuthContext";
import PrivateRoute from "../Routes/PrivateRoute";
import PublicRoute from "../Routes/PublicRoute";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <PublicRoute exact path='/signup' component={Signup}/>
                        <PublicRoute exact path='/login' component={Login}/>
                        <PrivateRoute exact path='/quiz/:id' component={Quiz}/>
                        <PrivateRoute exact path='/result' component={Result}/>
                    </Switch>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;

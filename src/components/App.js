import './App.css';
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {AuthProvider} from "../contexts/AuthContext";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path='/signup' component={Signup}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/quiz' component={Quiz}/>
                        <Route exact path='/result' component={Result}/>
                    </Switch>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;

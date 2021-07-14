import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";

const PublicRoute = () => {
return(
    <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Redirect to="/" />
    </Switch>
)
}
export default PublicRoute
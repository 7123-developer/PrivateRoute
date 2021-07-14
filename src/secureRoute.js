import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./screen/Home";

const SecureRoute = () => {
return(
    <Switch>
    <Route exact path="/home" component={Home} />
    <Redirect path="/"/>
    </Switch>
)
}
export default SecureRoute
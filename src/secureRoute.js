import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./screen/Home";

const SecureRoute = () => {
return(
    <Switch>
    <Route exact path="/" component={Home} />
    <Redirect to="/"/>
    </Switch>
)
}
export default SecureRoute
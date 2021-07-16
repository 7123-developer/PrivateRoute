import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import SecureRoute from './secureRoute'
import PublicRoute from './publicRoute';

function App() {
  const data = JSON.parse(localStorage.getItem("auth"))
  console.log(data,"llll")
  return (
    <Router>
       { data ? <SecureRoute/> : <PublicRoute/> }
    </Router>
  );
}

export default App;

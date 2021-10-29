import './App.css';

import {AuthProvider} from "./contexts/AuthContext"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./Components/Login/Login"
import HomeScreen from "./HomeScreen"
function App() {
  
  return (
   <Router>
     <AuthProvider>
       <Switch>
       <Route path="/login" component={Login} />
         <Route path="/home" component={HomeScreen} />
       </Switch>
     </AuthProvider>
   </Router>
  );
}

export default App;

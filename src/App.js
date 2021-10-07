import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import './App.css'
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./Pages/UserList/UserList";


function App() {
  return (
    <Router>
      <Topbar /> 

      <div className="container">

        <Sidebar />
        <Switch>

          <Route exact path='/'>
          <Home />
          </Route>

          <Route path='/userList'>
          <UserList />
          </Route>

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;

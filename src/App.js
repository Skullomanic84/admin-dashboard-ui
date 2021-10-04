import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import './App.css'


function App() {
  return (
    <div>
      <Topbar /> 

      <div className="container">

        <Sidebar />

        other pages
      </div>
    </div>
  );
}

export default App;

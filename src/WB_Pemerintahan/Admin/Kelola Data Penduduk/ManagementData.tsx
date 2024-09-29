import { createSignal } from "solid-js";
import Sidebar from "../Sidebar/sidebaradmin"; // Adjust the path as necessary
import Navbar from "../Navbar/navbaradmin"; // Adjust the path as necessary
import Data from "./DataPenduduk"; // Adjust the path as necessary


const Dashboard = () => {
  const [] = createSignal(true);

  return (
  
    <div class="dashboard-container">

      <div class="main-content">
      <Sidebar/>
     {<Data/>}
      </div>
    </div>
  );
};

export default Dashboard;

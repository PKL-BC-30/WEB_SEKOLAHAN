import { createSignal } from "solid-js";
import Sidebar from "../Sidebar/sidebaradmin"; // Adjust the path as necessary
import Navbar from "../Navbar/navbaradmin"; // Adjust the path as necessary
import DataBansos from "./bansos"; // Adjust the path as necessary


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = createSignal(true);

  return (
  
    <div class="dashboard-container">

      <div class="main-content">
      <Sidebar/>
     {<DataBansos/>}
      </div>
    </div>
  );
};

export default Dashboard;

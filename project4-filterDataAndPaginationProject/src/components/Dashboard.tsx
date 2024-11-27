import ProjectTable from "./ProjectTable";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex-1 flex">
      {/* Sidbar */}
      <Sidebar />
      {/* ProjectTable */}
      <ProjectTable />
    </div>
  );
};

export default Dashboard;

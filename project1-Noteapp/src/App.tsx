import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="h-screen w-full flex">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-[70vw]">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default App;

import ContextProvider from "../Contex";
import BannerSection from "./components/BannerSection";
import ProfileSection from "./components/ProfileSection";
import Sidebar from "./components/Sidebar";
import TabsSection from "./components/TabsSection";
import ProfileContex from "./ProfileContex";
const App = () => {
  return (
    <ContextProvider>
      <div className="h-screen flex">
        <Sidebar />
        <div className="flex-1 h-screen overflow-y-auto">
          <ProfileContex>
            <BannerSection />
            <ProfileSection />
            <TabsSection />
          </ProfileContex>
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;

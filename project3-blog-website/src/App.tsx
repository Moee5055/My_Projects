import { Plus } from "lucide-react";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";

const categories = [
  "For you",
  "Following",
  "Docker",
  "Product Management",
  "Java",
  "Programming",
];

const App = () => {
  return (
    <div className="h-screen w-full bg-[#FFFFFF] flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        <div className="grow-[4] border-r pt-[40px]">
          <div className="max-w-[600px] mx-auto">
            <ul className="flex gap-10 border-b pr-3 pt-1 pb-3">
              <Plus className="text-gray-500" size={20} />
              <div
                className="flex-1 flex gap-5 tracking-wide"
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                {categories?.map((category) => (
                  <li key={category} className="text-[0.8rem] text-gray-600">
                    {category}
                  </li>
                ))}
              </div>
            </ul>
            {/* content */}
            <main className="flex flex-col pt-[50px]">
              <Blog
                heading="Design Patterns in React"
                subHeading="Introduction"
                likes={76}
                date="Jun 14"
                writerInfo="Anahit Vardevanyan in Octa Labs Insights"
              />
            </main>
          </div>
        </div>
        <div className="hidden lg:flex grow-[3]">2</div>
      </div>
    </div>
  );
};

export default App;

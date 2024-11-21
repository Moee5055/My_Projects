import { Plus } from "lucide-react";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Trends from "./components/Trends";
import { Button } from "./components/ui/button";
import FollowPeople from "./components/FollowPeople";
import { useContext } from "react";
import { PostsContext } from "./Provider";

const categories = [
  "For you",
  "Following",
  "Docker",
  "Product Management",
  "Java",
  "Programming",
];

const topics = [
  "Technology",
  "Design Thinking",
  "Crypto",
  "Reading",
  "Web Development",
];

const App = () => {
  const context = useContext(PostsContext);
  if (!context) return null;
  const { posts } = context;
  return (
    <div className="h-screen w-full bg-[#FFFFFF] flex flex-col">
      <Navbar />
      <div className="flex-1 flex overflow-y-auto">
        <div className="grow-[3] border-r pt-[40px]">
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
            <main className="flex flex-col pt-[50px] gap-3">
              {posts.map(
                ({
                  heading,
                  subHeading,
                  likes,
                  date,
                  imageUrl,
                  writerInfo,
                }) => (
                  <Blog
                    key={heading}
                    heading={heading}
                    subHeading={subHeading}
                    likes={likes}
                    date={date}
                    writerInfo={writerInfo}
                    imageUrl={imageUrl}
                  />
                )
              )}
            </main>
          </div>
        </div>
        {/* right section */}
        <div className="hidden lg:flex max-w-[450px] flex-col px-4">
          {/* People to follow */}
          <FollowPeople />
          {/* top trends */}
          <div className="border-b py-3">
            <h2 className="font-bold text-md mb-3 hover:underline cursor-pointer">
              Today's Top Trends
            </h2>
            <Trends
              author="Marren Toff"
              title=" Be the Person You are in Vacation"
            />
            <Trends
              author="James Aruthor"
              title="Always Work on Yourself to become bettter person"
            />
            <Trends
              author="Lindey Curtis"
              title="The Real Impact of dark UX patterns"
            />
          </div>
          {/* topics for you */}
          <div className="border-b py-3">
            <h2 className="font-bold mb-3 text-md">Topics for you</h2>
            <div className="flex flex-wrap gap-3">
              {topics.map((topic) => (
                <Button size="sm" key={topic}>
                  {topic}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

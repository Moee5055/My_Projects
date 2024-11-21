import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BookmarkPlus,
  CircleMinus,
  Ellipsis,
  Heart,
  MessageCircle,
} from "lucide-react";

import { PostType } from "./AddNewBlog";
import { useContext } from "react";
import { PostsContext } from "@/Provider";

const Blog = ({
  writerInfo,
  heading,
  subHeading,
  date,
  likes,
  imageUrl,
}: PostType) => {
  const context = useContext(PostsContext);
  if (!context) return null;

  const { handleRemovePost } = context;

  return (
    <section className="border-b pb-6 cursor-pointer pr-3">
      <div className="flex items-center gap-2">
        <Avatar className="h-6 w-6">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-sm font-['Ubuntu'] font-thin">{writerInfo}</span>
      </div>

      {/* content */}
      <div className="flex pt-4 gap-10">
        <div className="flex-1 pr-3">
          <h2 className="text-xl font-extrabold">{heading}</h2>
          <p className="text-[0.9rem] mb-[2rem] text-slate-500">{subHeading}</p>
          {/* additional information */}
          <div className="flex items-center text-[0.75rem]">
            <div className="flex items-center mr-auto gap-3">
              <span className="inline-block">{date}</span>
              <span className="flex items-center gap-[2px]">
                <Heart
                  size={16}
                  className="fill-neutral-500 stroke-transparent"
                />
                <span className="">{likes}</span>
              </span>
              <span className="flex items-center gap-[2px]">
                <MessageCircle
                  size={16}
                  className="fill-neutral-500 stroke-transparent"
                />
                8
              </span>
            </div>
            <div className="flex items-center gap-5">
              <CircleMinus
                size={20}
                className="text-slate-500 cursor-pointer hover:bg-red-500 hover:stroke-white rounded-full"
                onClick={() => handleRemovePost(heading)}
              />
              <BookmarkPlus
                size={20}
                className="text-slate-500 cursor-pointer stroke-gray-500"
              />
              <Ellipsis size={20} className="text-slate-500 cursor-pointer" />
            </div>
          </div>
        </div>
        {/* blog image */}
        <div className="max-w-[120px] max-h-[80px]">
          <img
            src={imageUrl}
            className={`h-full w-full object-cover object-center ${
              !imageUrl && "hidden"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;

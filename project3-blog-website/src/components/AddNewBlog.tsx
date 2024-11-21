import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PostsContext } from "@/Provider";
import { SquarePen } from "lucide-react";
import { ChangeEvent, useContext, useState } from "react";

export type PostType = {
  heading: string;
  subHeading: string;
  date: string;
  imageUrl?: string;
  likes?: number;
  writerInfo?: string;
};

export function AddNewBlog() {
  const context = useContext(PostsContext);
  const [newPosts, setNewPosts] = useState<PostType>({
    heading: "",
    subHeading: "",
    date: "",
    imageUrl: "",
  });
  const [isOpen, setIsOpen] = useState(false); //open or close the modal

  if (!context) return null;
  const { handleAddNewPosts } = context;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!newPosts) return null;
    setNewPosts({ ...newPosts, [name]: value });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="flex items-center gap-1 cursor-pointer">
          <SquarePen size={20} className="text-gray-500" />
          <span
            style={{
              fontFamily: "Playfair Display",
            }}
            className="font-normal text-sm"
          >
            Write
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Write New Blog</DialogTitle>
          <DialogDescription>
            Add new blog here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Heading
            </Label>
            <Input
              id="name"
              name="heading"
              placeholder="Eg: learn about nextjs 15"
              className="col-span-3"
              value={newPosts?.heading}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Sub-Heading
            </Label>
            <Input
              id="username"
              name="subHeading"
              placeholder="Introduction"
              className="col-span-3"
              value={newPosts?.subHeading}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <input
              type="date"
              value={newPosts?.date}
              onChange={handleChange}
              name="date"
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              setIsOpen(false);
              handleAddNewPosts(newPosts);
              setNewPosts({
                heading: "",
                subHeading: "",
                date: "",
                imageUrl: "",
              });
            }}
          >
            Add Blog
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewBlog;

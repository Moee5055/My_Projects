import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

type FollowComponentProps = {
  personName: string;
  imageUrl?: string;
  id: string;
  isFollwed: boolean;
  updateFollow: (id: string) => void;
};

const Follow = ({
  personName,
  id,
  isFollwed,
  updateFollow,
}: FollowComponentProps) => {
  return (
    <div className="flex items-center">
      <div className="mr-auto flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="font-semibold text-[0.9rem]">{personName}</span>
      </div>
      {/* follow button */}
      <Button
        className="rounded-full transition-all"
        variant={`${isFollwed ? "default" : "outline"}`}
        size="sm"
        onClick={() => updateFollow(id)}
      >
        {isFollwed ? "following" : "follow"}
      </Button>
    </div>
  );
};

export default Follow;

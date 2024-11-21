import { useState } from "react";
import Follow from "./Follow";

type FollowPersonType = {
  personName: string;
  imageUrl?: string;
  id: string;
  isFollwed: boolean;
};

const peopleToFollow = [
  {
    id: "1",
    personName: "Alena Gouse",
    isFollwed: true,
  },
  {
    id: "2",
    personName: "Ruben Baltor",
    isFollwed: false,
  },
  {
    id: "3",
    personName: "Aspen Stanton",
    isFollwed: true,
  },
];

const FollowPeople = () => {
  const [people, setPeople] = useState<FollowPersonType[] | undefined>(
    peopleToFollow
  );

  const handleChangeFollow = (id: string) => {
    const updatedPeople = people?.map((person) => {
      if (person.id === id) {
        return { ...person, isFollwed: !person.isFollwed };
      }
      return person;
    });
    setPeople(updatedPeople);
  };

  return (
    <div className="border-b py-3">
      <h2 className="font-bold text-md mb-3">People to follow</h2>
      {/* person to follow */}
      <div className="flex flex-col gap-3">
        {people?.map(({ personName, id, isFollwed }) => (
          <Follow
            key={id}
            personName={personName}
            id={id}
            isFollwed={isFollwed}
            updateFollow={handleChangeFollow}
          />
        ))}
      </div>
    </div>
  );
};

export default FollowPeople;

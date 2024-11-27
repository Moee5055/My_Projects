type UserData = {
  name: string;
  country: string;
  image: string;
  email: string;
  project: string;
  date: string;
  status: string;
  progress: string;
};

type UserDataProps = {
  data: UserData[];
};

const UserData = ({ data }: UserDataProps) => {
  return (
    <table className="border border-gray-700 shadow-lg text-white bg-gray-900 overflow-auto text-[0.9rem]">
      <thead>
        <tr className="border-b border-b-gray-700">
          <td className="p-2 capitalize font-bold">Image</td>
          <td className="p-2 capitalize font-bold">Client</td>
          <td className="p-2 capitalize font-bold">country</td>
          <td className="p-2 capitalize font-bold">email</td>
          <td className="p-2 capitalize font-bold">project name</td>
          <td className="p-2 capitalize font-bold">task progress</td>
          <td className="p-2 capitalize font-bold">Date</td>
          <td className="p-2 capitalize font-bold">Status</td>
          <td className="p-2 capitalize font-bold">action</td>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({
            name,
            country,
            image,
            project,
            progress,
            date,
            status,
            email,
          }) => {
            return (
              <tr className="border-b border-b-gray-700" key={name}>
                <td className="p-2">
                  <div className="w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                    <img
                      src={image}
                      alt="client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="px-2">{name}</td>
                <td className="px-2">{country}</td>
                <td className="px-2">{email}</td>
                <td className="px-2">{project}</td>
                <td className="px-2">
                  <div className="w-20 h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className={`bg-green-500 h-full`}
                      style={{ width: `${progress}` }} // Dynamically set width
                    ></div>
                  </div>
                </td>
                <td className="px-2">
                  <span
                    className={`py-2 px-2 font-medium text-md rounded-md ${
                      status.toLocaleLowerCase() === "completed"
                        ? `bg-green-500 text-white`
                        : ``
                    }`}
                  >
                    {status}
                  </span>
                </td>
                <td className="px-2">{date}</td>
                <td className="text-center">...</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default UserData;

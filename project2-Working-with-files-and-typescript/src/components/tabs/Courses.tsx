import React from "react";

const courses = [
  {
    id: 1,
    title: "Introduction to React",
    description:
      "Learn the basics of React and build your first web application.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "4 weeks",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into advanced JavaScript concepts and patterns.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "6 weeks",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    description:
      "Master the principles of user interface and user experience design.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "5 weeks",
  },
];

export default function CoursesComponent() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                Duration: {course.duration}
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

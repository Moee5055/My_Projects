import React from "react";
import { Book, FolderKanban, Home, Info, Phone } from "lucide-react";
import About from "../components/tabs/About";
import Projects from "../components/tabs/Projects";
import Contact from "../components/tabs/Contact";
import Courses from "../components/tabs/Courses";
import HomeComponent from "../components/tabs/Home";

export const tabsData = [
  {
    id: "home",
    title: "Home",
    icon: <Home size={18} />,
    component: <HomeComponent />,
  },
  {
    id: "about",
    title: "About",
    icon: <Info size={18} />,
    component: <About />,
  },
  {
    id: "projects",
    title: "Projects",
    icon: <FolderKanban size={18} />,
    component: <Projects />,
  },
  {
    id: "courses",
    title: "Courses",
    icon: <Book size={18} />,
    component: <Courses />,
  },
  {
    id: "contact",
    title: "Contact",
    icon: <Phone size={18} />,
    component: <Contact />,
  },
];

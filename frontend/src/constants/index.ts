import { MdOutlineFeed, MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { IconType } from "react-icons";

interface DashboardLink {
  id: number;
  name: string;
  path: string;
  icon: IconType; 
}

export const dashboardLinks: DashboardLink[] = [
  {
    id: 1,
    name: "dashboard",
    path: "/dashboard",
    icon: MdOutlineSpaceDashboard,
  },
  {
    id: 2,
    name: "posts",
    path: "/posts",
    icon: MdOutlineFeed,
  },
  {
    id: 3,
    name: "profile",
    path: "/profile",
    icon: AiOutlineProfile,
  },
];

import {
  Calendar,
  CreditCard,
  EarthIcon,
  LayoutDashboard,
  Settings,
  SpaceIcon,
  Users2,
} from "lucide-react";
import { ReactNode } from "react";

type NavLinks = {
  id: number;
  name: string;
  link: string;
  icon: ReactNode;
};
export const NavLinks = [
  { id: 1, name: "Dahsboard", link: "/dashboard", icon: LayoutDashboard },
  { id: 2, name: "Users", link: "/dashboard/users", icon: Users2 },
  { id: 3, name: "Spaces", link: "/dashboard/spaces", icon: EarthIcon },
  { id: 4, name: "Events", link: "/dashboard/events", icon: Calendar },
  { id: 5, name: "Billings", link: "/dashboard/billings", icon: CreditCard },
  { id: 6, name: "Settings", link: "/dashboard/settings", icon: Settings },
];

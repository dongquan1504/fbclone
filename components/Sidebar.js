import { useSession } from "next-auth/react";

import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  DesktopComputerIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import SidebarRow from "./SidebarRow";

const MenuData = [
  { icon: UsersIcon, title: "Friends" },
  { icon: UserGroupIcon, title: "Group" },
  { icon: ShoppingBagIcon, title: "Marketplace" },
  { icon: DesktopComputerIcon, title: "Watch" },
  { icon: CalendarIcon, title: "Events" },
  { icon: ClockIcon, title: "Memories" },
  { icon: ChevronDownIcon, title: "See More" },
];

function Sidebar() {
  const { data: session, status } = useSession();
  return (
    <div className="p-2 mt-5 max-w-[300px] xl:min-w-[150px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      {MenuData.map((item) => (
        <SidebarRow Icon={item.icon} title={item.title} />
      ))}
    </div>
  );
}

export default Sidebar;

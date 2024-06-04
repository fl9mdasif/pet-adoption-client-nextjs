import { DrawerItem, UserRole } from "@/types";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { USER_ROLE } from "@/contains/role";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PetsIcon from "@mui/icons-material/Pets";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Create pet",
          path: `${role}/create-pet`,
          icon: PlaylistAddIcon,
        },
        {
          title: "All Pets",
          path: `${role}/pets`,
          icon: PetsIcon,
        },
        {
          title: "Adoptions",
          path: `${role}/schedules`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: ChecklistIcon,
        },
        {
          title: "All Users",
          path: `${role}/users`,
          icon: GroupIcon,
        },
        {
          title: "My Profile",
          path: `${role}/profile`,
          icon: AccountCircleIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointment`,
          icon: CalendarMonthIcon,
        },
        {
          title: "My Profile",
          path: `${role}/profile`,
          icon: AccountCircleIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};

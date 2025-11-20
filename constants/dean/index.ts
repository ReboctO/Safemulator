import { LayoutDashboard, Users, BarChart3, FileText, Settings } from 'lucide-react';

export const sidebarLinks = [
  {
    icon: LayoutDashboard,
    route: "./dashboard",        // ← Relative path inside @dean slot
    label: "Dashboard",
  },
  {
    icon: Users,
    route: "./users",
    label: "Users",
  },
  {
    icon: BarChart3,
    route: "./analytics",
    label: "Analytics",
  },
  {
    icon: FileText,
    route: "./drillLogs",
    label: "Drill Logs",
  },
  {
    icon: Settings,
    route: "./settings",
    label: "Settings",
  },
];
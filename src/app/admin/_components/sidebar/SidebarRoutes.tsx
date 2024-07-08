"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import { usePathname } from "next/navigation";

const marketingRoutes = [
  {
    icon: Layout,
    label: "Analytics",
    href: "/admin/analytics",
  },
  {
    icon: Compass,
    label: "Reviews",
    href: "/admin/reviews",
  },
];

const adminRoutes = [
  {
    icon: List,
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    icon: BarChart,
    label: "Orders",
    href: "/admin/orders",
  },
  {
    icon: List,
    label: "Products",
    href: "/admin/products",
  },
  {
    icon: BarChart,
    label: "BannerPicture",
    href: "/admin/banner",
  },
];

const SidebarRoutes = () => {
  return <div>SidebarRoutes</div>;
};

export default SidebarRoutes;

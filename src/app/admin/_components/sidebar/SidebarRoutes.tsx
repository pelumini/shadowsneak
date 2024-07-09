"use client";

import {
  Compass,
  Layout,
  ListOrdered,
  ScanQrCode,
  ShoppingBasket,
} from "lucide-react";
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

const adminRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/admin",
  },
  {
    icon: ShoppingBasket,
    label: "Products",
    href: "/admin/products",
  },
  {
    icon: ListOrdered,
    label: "Orders",
    href: "/admin/orders",
  },
  {
    icon: ScanQrCode,
    label: "BannerPicture",
    href: "/admin/banner",
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();
  const isAdmin = pathname.includes("/admin");
  const routes = isAdmin ? adminRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;

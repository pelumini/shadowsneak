import React from "react";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type SidebarItemProps = {
  icon: LucideIcon;
  href: string;
  label: string;
};

const SidebarItem = ({ icon: Icon, href, label }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (pathname === "/" && href === "/") || pathname === href;

  const handleClick = () => {
    router.push(href);
  };

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 ${
        isActive &&
        "text-orange-700 bg-orange-200/20 hover:bg-orange-200/20 hover:text-orange-700"
      }`}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon />
        {label}
      </div>
      <div
        className={`ml-auto opacity-0 border-2 border-orange-700 h-full transition-all ${
          isActive && "opacity-100"
        }`}
      />
    </button>
  );
};

export default SidebarItem;

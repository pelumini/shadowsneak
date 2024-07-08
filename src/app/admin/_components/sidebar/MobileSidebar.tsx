import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import Image from "next/image";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="relative md:hidden pr-4 hover:opacity-75 transition">
        <Menu
          color="#FF630B"
          className="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -ml-2"
        />
        <Image height={35} width={35} alt="logo" src={"/logo2.svg"} />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 bg-white">
        <SheetHeader className="hidden">
          <SheetTitle>shadowsneak</SheetTitle>
          <SheetDescription>shadowsneak</SheetDescription>
        </SheetHeader>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

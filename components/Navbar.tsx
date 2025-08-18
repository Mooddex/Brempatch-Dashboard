import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 gap-2">
  {/* Left: Logo */}
  <Link href="/" className="flex items-center gap-2 sm:gap-3">
    <span className="font-semibold text-base sm:text-lg">Dashboard</span>
  </Link>

  {/* Right: User Menu */}
  <div className="flex items-center gap-3 sm:gap-4">
    <ModeToggle />
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar className="cursor-pointer ring-2 ring-transparent hover:ring-white transition">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="text-black bg-gray-200">MS</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40 bg-[#1e1e1e] text-white border border-[#2a2a2a]">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-[#2a2a2a]" />
        <DropdownMenuItem className="cursor-pointer hover:bg-[#2a2a2a]">
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-[#2a2a2a]">
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-red-500 hover:bg-[#2a2a2a]">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</nav>

  );
};

export default Navbar;

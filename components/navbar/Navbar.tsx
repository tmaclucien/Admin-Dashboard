import Image from "next/image";
import Link from "next/link";
import logo from "@/imgs/logo.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ModeToggle from "@/components/mode-toggle/ModeToggle";

const Navbar = () => {
  return (
    <nav className="w-full bg-primary dark:bg-slate-700  py-2 px-5  text-white flex justify-between items-center">
      {/* logo */}
      <Link href="/">
        <Image src={logo} width={40} height={40} alt="logo"></Image>
      </Link>
      <ModeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="text-black">LH</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/profile">profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/auth">Logout</Link>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;

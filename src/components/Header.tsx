'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
  user: {
    name: string;
    image?: string;
  } | null;
}

export default function Header({ setSidebarOpen, user }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-700">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden mr-2 text-zinc-900 dark:text-gray-200"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <Menu className="h-6 w-6" />
        </Button>
        <Input type="search" placeholder="Search..." className="w-64 hidden lg:block p-4 rounded-full text-zinc-900 dark:text-gray-200 bg-white dark:bg-zinc-800" />
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative h-10 w-10 rounded-full cursor-pointer">
              <Image
                className="rounded-full object-cover"
                src={user?.image || '/user.png'}
                alt="User"
                width={64}
                height={64}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut({ redirect: false })}>
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
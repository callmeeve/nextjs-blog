'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sideNav } from '@/constant';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
    const pathname = usePathname();

    return (
        <aside
            className={cn(
                sidebarOpen ? "translate-x-0" : "-translate-x-full",
                "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-zinc-900 border-r border-gray-100 dark:border-zinc-700 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto"
            )}
        >
            <div className="flex items-center justify-between p-4">
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Blog Admin</h1>
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden text-zinc-900 dark:text-gray-200"
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Close sidebar"
                >
                    <X className="h-6 w-6" />
                </Button>
            </div>
            <nav className="mt-4 p-2 space-y-2.5">
                {sideNav.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.href}
                        className={cn(
                            "flex items-center px-4 py-2.5 text-sm font-medium rounded-[0.2rem] text-zinc-900 dark:text-gray-200 hover:bg-blue-100 hover:text-blue-500 dark:hover:bg-blue-500",
                            pathname === item.href && "text-blue-500 bg-blue-100 dark:bg-blue-500"
                        )}
                    >
                        <item.icon className="mr-3 h-5 w-5" />
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { navLink } from '@/constant'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const pathname = usePathname();
    return (
        <nav className="sticky top-0 z-10 bg-white dark:bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <span className="text-2xl font-bold text-gray-800">BlogLogo</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLink.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className={cn(
                                        'text-gray-900 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium',
                                        {
                                            'text-gray-600 dark:text-gray-400': pathname !== item.href,
                                        }
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <Button
                            onClick={toggleMenu}
                            variant="ghost"
                            className="inline-flex items-center justify-center p-2 rounded-md text-zinc-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-900 dark:focus:ring-gray-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLink.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href}
                                className={cn(
                                    'text-gray-900 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium',
                                    {
                                        'text-gray-600 dark:text-gray-400': pathname !== item.href,
                                    }
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
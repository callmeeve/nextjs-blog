import { LayoutDashboard, FileText, BarChart3 } from "lucide-react";

const sideNav = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        href: "/admin",
    },
    {
        name: "Posts",
        icon: FileText,
        href: "/admin/posts",
    },
    {
        name: "Analytics",
        icon: BarChart3,
        href: "/admin/analytics",
    },
];

const navLink = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Blog',
        href: '/blog',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
];

export { sideNav, navLink };
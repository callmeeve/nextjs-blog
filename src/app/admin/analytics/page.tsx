'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, MessageSquare, Users, FileText } from "lucide-react"

export default function AdminBlogAnalyticsPage() {
    return (
        <div className="container mx-auto px-6 py-8">
            <div className="space-y-8">
                <div className="space-y-2">
                    <h3 className="text-xl font-medium text-zinc-900 dark:text-gray-200">Blog Analytics</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Analyze your blog performance</p>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="posts">Posts</TabsTrigger>
                        <TabsTrigger value="engagement">Engagement</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <Card className="rounded-[0.3rem] bg-white dark:bg-zinc-800">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                                    <Eye className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">452,389</div>
                                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                                </CardContent>
                            </Card>
                            <Card className="rounded-[0.3rem] bg-white dark:bg-zinc-800">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">128</div>
                                    <p className="text-xs text-muted-foreground">+12 new posts this month</p>
                                </CardContent>
                            </Card>
                            <Card className="rounded-[0.3rem] bg-white dark:bg-zinc-800">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Comments</CardTitle>
                                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">3,427</div>
                                    <p className="text-xs text-muted-foreground">+18.2% from last month</p>
                                </CardContent>
                            </Card>
                            <Card className="rounded-[0.3rem] bg-white dark:bg-zinc-800">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Subscribers</CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">11,573</div>
                                    <p className="text-xs text-muted-foreground">+8.3% from last month</p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="posts" className="space-y-4">
                        <Card className="rounded-[0.3rem] bg-white dark:bg-zinc-800">
                            <CardHeader>
                                <CardTitle>Top Posts</CardTitle>
                                <CardDescription>Most viewed posts in the last 30 days</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Post Title</TableHead>
                                            <TableHead>Views</TableHead>
                                            <TableHead>Comments</TableHead>
                                            <TableHead>Likes</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>10 Tips for Better SEO</TableCell>
                                            <TableCell>15,234</TableCell>
                                            <TableCell>89</TableCell>
                                            <TableCell>432</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>The Future of AI in Web Development</TableCell>
                                            <TableCell>12,456</TableCell>
                                            <TableCell>76</TableCell>
                                            <TableCell>387</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>How to Optimize Your React App</TableCell>
                                            <TableCell>11,789</TableCell>
                                            <TableCell>64</TableCell>
                                            <TableCell>356</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="engagement" className="space-y-4">
                        <Card className="rounded-[0.3rem] bg-white dark:bg-zinc-800">
                            <CardHeader>
                                <CardTitle>User Engagement</CardTitle>
                                <CardDescription>
                                    Engagement metrics for the last 30 days
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Users</TableHead>
                                            <TableHead>Comments</TableHead>
                                            <TableHead>Likes</TableHead>
                                            <TableHead>Shares</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>12,345</TableCell>
                                            <TableCell>1,234</TableCell>
                                            <TableCell>4,567</TableCell>
                                            <TableCell>2,345</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>11,234</TableCell>
                                            <TableCell>1,123</TableCell>
                                            <TableCell>4,123</TableCell>
                                            <TableCell>2,234</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>10,345</TableCell>
                                            <TableCell>1,345</TableCell>
                                            <TableCell>4,234</TableCell>
                                            <TableCell>2,456</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
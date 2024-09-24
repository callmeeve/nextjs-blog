import Image from 'next/image'
import { BarChart3, FileText, Users, PenBox } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

export default function AdminHome() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-gray-200">Dashboard</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">Welcome back, John Doe!</p>
      <div className="mt-8">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
            <Card className="rounded-[0.3rem] bg-gradient-to-r from-blue-500 to-blue-400 text-white dark:bg-gradient-to-r dark:from-blue-700 dark:to-blue-600">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245</div>
                <p className="text-xs text-muted-foreground">+20% from last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="w-full px-6 sm:w-1/2 xl:w-1/3 mt-4 sm:mt-0">
            <Card className="rounded-[0.3rem] bg-gradient-to-r from-green-500 to-green-400 text-white dark:bg-gradient-to-r dark:from-green-700 dark:to-green-600">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+10% from last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="w-full px-6 sm:w-1/2 xl:w-1/3 mt-4 xl:mt-0">
            <Card className="rounded-[0.3rem] bg-gradient-to-r from-yellow-500 to-yellow-400 text-white dark:bg-gradient-to-r dark:from-yellow-700 dark:to-yellow-600">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,678</div>
                <p className="text-xs text-muted-foreground">+15% from last month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Card className="rounded-[0.3rem] bg-white dark:bg-zinc-800">
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
            <CardDescription>You have published 10 posts this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center">
                  <Image
                    src={`https://dummyjson.com/image/150?text=${i}&fontSize=50`}
                    alt={`Post ${i}`}
                    className="h-10 w-10 rounded object-cover"
                    width={40}
                    height={40}
                  />
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">Post Title {i}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Published on May {10 + i}, 2023</p>
                  </div>
                  <div className="ml-auto">
                    <TooltipProvider delayDuration={200}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <PenBox className="h-4 w-4 text-muted-foreground" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left">Edit</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

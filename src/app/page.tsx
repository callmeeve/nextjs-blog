import Link from "next/link";
import TypingAnimation from "@/components/magicui/typing-animation";
import Meteors from "@/components/magicui/meteors";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-zinc-800">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
          <Meteors number={30} />
          <span className="text-center font-semibold text-sm lg:text-lg text-zinc-900 dark:text-gray-200">
            The Blog
          </span>
          <h1 className="my-4 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-3xl lg:text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Writings from Our Team
          </h1>
          <p className="mt-2 text-center text-sm lg:text-lg text-gray-500 dark:text-gray-400">
            A collection of thoughts, ideas, and stories.
          </p>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-zinc-900 py-12 lg:py-24">
        <div className="container grid max-w-6xl gap-10 px-6 md:gap-16 lg:grid-cols-2 xl:gap-20">
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="space-y-1.5">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Blog Post</span>
                <TypingAnimation className="text-start text-2xl md:text-3xl font-bold tracking-tighter md:leading-[3.5rem]" text="Introducing Components" />
              </div>
              <p className="max-w-[400px] lg:max-w-[800px] text-base leading-7 text-gray-500 md:text-xl dark:text-gray-400">
                Learn how to use components in your apps. They`re the building blocks of the web.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <Link
                href="#"
                className="inline-flex items-center text-base font-medium text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline"
                prefetch={false}
              >
                Read the full post
                <ChevronRightIcon className="w-4 h-4 ml-2 translate-x-0.5" />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <Image
              src="/images/hero.jpg"
              alt="Hero"
              width={800}
              height={600}
              className="rounded-lg border w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

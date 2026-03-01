"use client";

import Link from "next/link";

import { useUser } from "@clerk/nextjs";
import { Headphones, ThumbsUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  const { isLoaded, user } = useUser();

  return (
    <div className="hidden items-start justify-between lg:flex">
      <div className="space-y-1">
        <p className="text-muted-foreground text-sm">Nice to meet you</p>

        <h1 className="text-2xl font-semibold tracking-tight lg:text-3xl">
          {isLoaded ? (user?.fullName ?? user?.firstName ?? "there") : "..."}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <Button variant={"outline"} size={"sm"} asChild>
          <Link href="mailto:thegobimahato@gmail.com">
            <ThumbsUp />
            <span className="hidden lg:block">Feedback</span>
          </Link>
        </Button>

        <Button variant={"outline"} size={"sm"} asChild>
          <Link href="mailto:thegobimahato@gmail.com">
            <Headphones />
            <span className="hidden lg:block">Need help ?</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Atom, Home, Menu, PersonStanding, Rss, School } from "lucide-react";

// home, students, sponsors, parents, blog

const MyComponent = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="absolute top-4 right-4 mr-4">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="py-4">Absolute Robotics</SheetTitle>
          <SheetDescription className="flex flex-col gap-y-2">
            <Button asChild variant={"ghost"} size={"lg"}>
              <Link href="/home">
                <Home className="mr-2 h-5 w-5" />
                Home
              </Link>
            </Button>
            <Button asChild variant={"ghost"} size={"lg"}>
              <Link href="/students">
                <School className="mr-2 h-5 w-5" />
                Students
              </Link>
            </Button>
            <Button asChild variant={"ghost"} size={"lg"}>
              <Link href="/sponsors">
                <Atom className="mr-2 h-5 w-5" />
                Sponsors
              </Link>
            </Button>
            <Button asChild variant={"ghost"} size={"lg"}>
              <Link href="/parents">
                <PersonStanding className="mr-2 h-5 w-5" />
                Parents
              </Link>
            </Button>
            <Button asChild variant={"ghost"} size={"lg"}>
              <Link href="/blog">
                <Rss className="mr-2 h-5 w-5" />
                Blog
              </Link>
            </Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MyComponent;

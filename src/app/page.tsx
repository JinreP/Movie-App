"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavBar } from "@/components/ui/NavBar";
import { FeaturedMovie } from "@/components/ui/Hero";
import { useState } from "react";
export default function Home() {
  return (
    <div className="">
      <NavBar />
      <div className="  ">
        <FeaturedMovie
          text="Now Playing:"
          title="Wicked"
          description="Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. "
          imageUrl="wicked.jpg"
        />
        <FeaturedMovie
          text="Now Playing:"
          title="Gladiator II"
          description="After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people. "
          imageUrl="gladiator.png"
        />

        <FeaturedMovie
          text="Now Playing:"
          title="Moana 2"
          description="After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced. "
          imageUrl="kino3.jpg"
        />
      </div>
    </div>
  );
}

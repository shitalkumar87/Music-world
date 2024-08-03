"use client";
 
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/Ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
const Navbar = ({ className }: { className?: string }) => {
    const [active,SetActive]= useState<string|null>(null)
  return (
    <div  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
       <Menu setActive={SetActive}>
          <Link href={"/"}>
          <MenuItem setActive={SetActive} active={active} item="Home">
          </MenuItem>

         
          </Link>

          <MenuItem setActive={SetActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/courses">All Courses</HoveredLink>
          <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
          <HoveredLink href="/courses">Advance Composition</HoveredLink>
          <HoveredLink href="/courses">Songwriting</HoveredLink>
          <HoveredLink href="/courses">Music Composition</HoveredLink>
            </div> 
           
          </MenuItem>

          <Link href={"/contact"}>

          <MenuItem setActive={SetActive} active={active} item="Contact Us">
          </MenuItem>
          </Link>
       </Menu>
      
    </div>
  )
}

export default Navbar
"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, UserCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between relative">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium absolute left-4">
            <Link href="#" className="transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#" className="transition-colors hover:text-primary">
              Features
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-primary">
                Solutions
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link href="/pricing" className="w-full">Pricing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">Resources</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">Support</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Logo</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4 absolute right-4">
            <Button className="hidden md:inline-flex" size="sm" variant="outline">
                <UserCircle className="mr-2 h-4 w-4" />
                Login
            </Button>
            <Button className="hidden md:inline-flex" size="sm" variant="default">
            Try for free
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <nav className="flex flex-col space-y-4">
                  <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                    Home
                  </Link>
                  <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
                    Features
                  </Link>
                  <Link href="#solutions" className="text-sm font-medium transition-colors hover:text-primary">
                    Solutions
                  </Link>
                  <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
                    Pricing
                  </Link>
                  <Link href="#resources" className="text-sm font-medium transition-colors hover:text-primary">
                    Resources
                  </Link>
                  <Link href="#support" className="text-sm font-medium transition-colors hover:text-primary">
                    Support
                  </Link>
                </nav>
                <Button className="mt-4" size="sm">Get Started</Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}


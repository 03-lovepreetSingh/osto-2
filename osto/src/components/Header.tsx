'use client'

import React from 'react'
import Link from 'next/link'
import {
  Search,
  Bell,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  Menu,
} from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface HeaderProps {
  toggleSidebar: () => void
}

export const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between w-full h-14 bg-[#1a2233] px-4">
      <div className="flex items-center">
        <div className="lg:hidden mr-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="text-white hover:bg-[#2a3347] hover:text-white"
          >
            <Menu size={20} />
          </Button>
        </div>
        <Link href="/" className="text-white font-bold text-2xl mr-6">
          <span className="text-white">osto</span>
        </Link>
        <div className="relative hidden sm:inline-block text-white">
          <button className="flex items-center space-x-1 bg-[#2a3347] py-1 px-3 rounded">
            <span className="text-xs">Select Unit</span>
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative mr-4 hidden md:block">
          <Input
            type="text"
            placeholder="Search Assets, Alerts..."
            className="bg-[#2a3347] text-white border-[#2a3347] w-64 h-8 text-sm placeholder:text-gray-400"
          />
          <Search
            size={16}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">
            Ctrl K
          </span>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <div className="relative">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>
          <MessageSquare size={18} className="hidden sm:block" />
          <HelpCircle size={18} className="hidden sm:block" />
          <div className="flex items-center ml-2">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
              O
            </div>
            <div className="ml-2 text-xs hidden sm:block">
              <div>Osto Demo</div>
              <div>Osto Demo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import React, { useState } from 'react'
import { Header } from '../components/Header'
import { SideNav } from '../components/SideNav'
import { Breadcrumb } from '../components/Breadcrumb'

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f8f9fa]">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <SideNav
          isOpen={sidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
        />
        <div className="flex-1 flex flex-col">
          <div className="lg:hidden p-2">
            
          </div>
          <Breadcrumb />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

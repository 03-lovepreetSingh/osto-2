'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Lock,
  LayoutDashboard,
  AlertTriangle,
  Network,
  Users,
  Shield,
  FileText,
  Settings,
  Server,
  Infinity,
  Gauge,
  Key,
  X,
} from 'lucide-react'
import { Button } from './ui/button'

interface SideNavProps {
  isOpen: boolean
  closeSidebar: () => void
}

export const SideNav = ({ isOpen, closeSidebar }: SideNavProps) => {
  const pathname = usePathname()
  const isActive = (path: string) => {
    return (
      pathname === path || pathname.startsWith(path + '/')
    )
  }
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}
      <div
        className={`
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0
        fixed lg:static
        z-30 
        w-[220px] 
        h-full 
        bg-white 
        border-r 
        transition-transform 
        duration-200 
        ease-in-out
      `}
      >
        <div className="flex justify-between items-center p-4 lg:hidden">
          <span className="font-bold text-lg">Menu</span>
          <Button variant="ghost" size="sm" onClick={closeSidebar}>
            <X size={18} />
          </Button>
        </div>
        <div className="py-4">
          <div className="px-4 mb-4">
            <div className="flex items-center mb-2">
              <Lock
                size={18}
                className={`mr-2 ${isActive('/') && pathname === '/' ? 'text-blue-600' : 'text-gray-500'}`}
              />
              <Link
                href="/"
                className={`text-sm ${isActive('/') && pathname === '/' ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                onClick={() => closeSidebar()}
              >
                Connections
              </Link>
            </div>
            <div className="flex items-center mb-2">
              <LayoutDashboard
                size={18}
                className={`mr-2 ${isActive('/account-center') ? 'text-blue-600' : 'text-gray-500'}`}
              />
              <Link
                href="/account-center"
                className={`text-sm ${isActive('/account-center') ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                onClick={() => closeSidebar()}
              >
                Account Center
              </Link>
            </div>
            <div className="flex items-center mb-2">
              <Server
                size={18}
                className={`mr-2 ${isActive('/integrations') ? 'text-blue-600' : 'text-gray-500'}`}
              />
              <Link
                href="/integrations"
                className={`text-sm ${isActive('/integrations') ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                onClick={() => closeSidebar()}
              >
                Integrations
              </Link>
            </div>
            <div className="flex items-center mb-2">
              <Network
                size={18}
                className={`mr-2 ${isActive('/cluster') ? 'text-blue-600' : 'text-gray-500'}`}
              />
              <Link
                href="/cluster"
                className={`text-sm ${isActive('/cluster') ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                onClick={() => closeSidebar()}
              >
                Cluster Management
              </Link>
            </div>
          </div>
          <div className="px-4 mb-4">
            <div className="text-xs text-gray-400 font-medium uppercase mb-2 ml-2">
              Administration
            </div>
            <div className="flex items-center mb-2">
              <Users
                size={18}
                className={`mr-2 ${isActive('/users') ? 'text-blue-600' : 'text-gray-500'}`}
              />
              <Link
                href="/users"
                className={`text-sm ${isActive('/users') ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                onClick={() => closeSidebar()}
              >
                Users & Permissions
              </Link>
            </div>
            <div className="flex items-center mb-2">
              <Settings
                size={18}
                className={`mr-2 ${isActive('/management') ? 'text-blue-600' : 'text-gray-500'}`}
              />
              <Link
                href="/management"
                className={`text-sm ${isActive('/management') ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                onClick={() => closeSidebar()}
              >
                Management
              </Link>
            </div>
            <div className="flex items-center mb-2">
              <Shield
                size={18}
                className={`mr-2 ${isActive('/security-configuration') ? 'text-blue-600' : 'text-gray-500'}`}
              />
              <Link
                href="/security-configuration"
                className={`text-sm ${isActive('/security-configuration') ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                onClick={() => closeSidebar()}
              >
                Security Configuration
              </Link>
            </div>
            <div className="flex items-center mb-2">
              <FileText
                size={18}
                className={`mr-2 ${isActive('/reports') ? 'text-blue-600' : 'text-gray-500'}`}
              />
              <Link
                href="/reports"
                className={`text-sm ${isActive('/reports') ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                onClick={() => closeSidebar()}
              >
                Reports & Logs
              </Link>
            </div>
          </div>
          <div className="px-4">
            <div className="text-xs text-gray-400 font-medium uppercase mb-2 ml-2">
              Security
            </div>
            <div className="flex items-center mb-2">
              <AlertTriangle
                size={18}
                className={`mr-2 ${isActive('/alerts') ? 'text-blue-600' : 'text-gray-500'}`}
              />
              <Link
                href="/alerts"
                className={`text-sm ${isActive('/alerts') ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                onClick={() => closeSidebar()}
              >
                Alerts
              </Link>
              <span className="ml-auto bg-red-100 text-red-600 text-xs px-1.5 py-0.5 rounded-full">
                24
              </span>
            </div>
            <div className="flex items-center mb-2">
              <div
                size={18}
                className={`mr-2 ${isActive('/inventory') ? 'text-blue-600' : 'text-gray-500'}`}
              />
              <Link
                href="/inventory"
                className={`text-sm ${isActive('/inventory') ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                onClick={() => closeSidebar()}
              >
                Inventory
              </Link>
            </div>
            <div className="flex items-center mb-2">
              <Infinity
                size={18}
                className={`mr-2 ${isActive('/ci-source') ? 'text-blue-600' : 'text-gray-500'}`}
              />
              <Link
                href="/ci-source"
                className={`text-sm ${isActive('/ci-source') ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                onClick={() => closeSidebar()}
              >
                CI Source
              </Link>
            </div>
            <div className="flex items-center mb-2">
              <Gauge
                size={18}
                className={`mr-2 ${isActive('/organization') ? 'text-blue-600' : 'text-gray-500'}`}
              />
              <Link
                href="/organization"
                className={`text-sm ${isActive('/organization') ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                onClick={() => closeSidebar()}
              >
                Organization
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

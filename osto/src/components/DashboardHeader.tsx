'use client'

import React from 'react'
import { ChevronDown, Save, MoreVertical, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

export const DashboardHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="text-xl font-medium">Dashboard</h1>
        <div className="relative inline-block">
          <button className="flex items-center space-x-1 bg-white border rounded px-3 py-1">
            <span className="text-sm">AI Security Default</span>
            <ChevronDown size={14} />
          </button>
        </div>
        <button className="text-xs text-blue-600">Save as New</button>
        <button className="ml-2">
          <MoreVertical size={16} />
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="outline" size="sm" className="flex items-center">
          <span>Dashboard 2.0</span>
          <ExternalLink size={14} className="ml-1" />
        </Button>
        <Button size="sm">Dashboard Builder</Button>
        <Button variant="outline" size="sm" className="flex items-center">
          <span>Export</span>
          <ChevronDown size={14} className="ml-1" />
        </Button>
      </div>
    </div>
  )
}

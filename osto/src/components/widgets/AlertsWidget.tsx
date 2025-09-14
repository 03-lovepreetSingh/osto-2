'use client'

import React from 'react'
import { Info, MoreVertical } from 'lucide-react'

export const AlertsWidget = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <h2 className="font-medium">AI & Machine Learning Alerts</h2>
          <Info size={14} className="ml-2 text-gray-400" />
        </div>
        <div className="flex items-center">
          <button className="text-blue-600 text-sm mr-2">See All</button>
          <MoreVertical size={16} className="text-gray-400" />
        </div>
      </div>
      <div className="text-sm text-gray-500">By Severity</div>
      <div className="flex items-center justify-center my-6">
        <div className="relative w-40 h-40">
          {/* Circular chart background */}
          <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
          {/* Yellow segment */}
          <div
            className="absolute inset-0 rounded-full border-8 border-yellow-400"
            style={{
              clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)',
            }}
          ></div>
          {/* Orange segment */}
          <div
            className="absolute inset-0 rounded-full border-8 border-orange-400"
            style={{
              clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)',
            }}
          ></div>
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-semibold">24</span>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-orange-400 mr-2"></div>
          <span className="text-sm">5 Medium</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
          <span className="text-sm">5 Low</span>
        </div>
      </div>
    </div>
  )
}

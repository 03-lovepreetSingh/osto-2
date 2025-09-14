'use client'

import React from 'react'
import { Info, MoreVertical } from 'lucide-react'

export const TopRisksWidget = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <h2 className="font-medium">Top AI & Machine Learning Risks</h2>
          <Info size={14} className="ml-2 text-gray-400" />
        </div>
        <MoreVertical size={16} className="text-gray-400" />
      </div>
      <div className="text-sm text-gray-500">4 insights</div>
      <div className="border-t mt-2">
        <div className="py-3 border-b">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <span className="text-xl font-medium mr-4">7</span>
              <div>
                <div className="text-sm">
                  Internet-exposed compute assets running AI/ML applications
                </div>
                <div className="inline-block bg-gray-100 text-xs px-2 py-0.5 rounded mt-1">
                  Compute Services
                </div>
              </div>
            </div>
            <div className="text-xl font-medium">5</div>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="text-sm">
                Assets running vulnerable AI software applications
              </div>
              <div className="inline-block bg-gray-100 text-xs px-2 py-0.5 rounded mt-1">
                Content
              </div>
            </div>
          </div>
        </div>
        <div className="py-3">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <span className="text-xl font-medium mr-4">5</span>
              <div>
                <div className="text-sm">Unsafe AI 3rd-party access keys</div>
                <div className="inline-block bg-red-100 text-xs px-2 py-0.5 rounded mt-1 text-red-600">
                  Alerts
                </div>
                <span className="ml-2 text-orange-500 text-xs">2</span>
              </div>
            </div>
            <div className="text-xl font-medium">3</div>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="text-sm">Alerts on managed AI & ML assets</div>
              <div className="inline-block bg-red-100 text-xs px-2 py-0.5 rounded mt-1 text-red-600">
                Alerts
              </div>
              <span className="ml-2 text-orange-500 text-xs">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

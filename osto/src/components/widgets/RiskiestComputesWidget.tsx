'use client'

import React from 'react'
import { Info, MoreVertical } from 'lucide-react'

export const RiskiestComputesWidget = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h2 className="font-medium">
            Riskiest Computes Running AI & Machine Learning
          </h2>
          <Info size={14} className="ml-2 text-gray-400" />
        </div>
        <div className="flex items-center">
          <button className="text-blue-600 text-sm mr-2">See All</button>
          <MoreVertical size={16} className="text-gray-400" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left pb-2 font-medium text-sm">Asset</th>
              <th className="text-left pb-2 font-medium text-sm">Account</th>
              <th className="text-left pb-2 font-medium text-sm">Risk Score</th>
              <th className="text-left pb-2 font-medium text-sm">
                AI Applications
              </th>
              <th className="text-left pb-2 font-medium text-sm">
                AI Package Vulnera...
              </th>
            </tr>
          </thead>
          <tbody>{/* This table is empty in the image */}</tbody>
        </table>
      </div>
    </div>
  )
}

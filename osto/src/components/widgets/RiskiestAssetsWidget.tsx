'use client'

import React from 'react'
import { Info, MoreVertical } from 'lucide-react'

export const RiskiestAssetsWidget = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h2 className="font-medium">Riskiest AI & Machine Learning Assets</h2>
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
                Inventory Alerts
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-indigo-100 rounded flex items-center justify-center mr-2">
                    <span className="text-indigo-600 text-xs">B</span>
                  </div>
                  <div>
                    <div className="text-sm">bar-test</div>
                    <div className="text-xs text-gray-500">
                      Azure OpenAI Account
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-2">
                    <span className="text-blue-600 text-xs">R</span>
                  </div>
                  <div>
                    <div className="text-sm">research-ea</div>
                    <div className="text-xs text-gray-500">
                      Virginia (eastus)
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-3">
                <div className="text-sm font-medium text-orange-500">6.0</div>
              </td>
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-50 rounded flex items-center justify-center mr-2">
                    <span className="text-red-500 text-xs">!</span>
                  </div>
                  <div>
                    <div className="text-sm">5 Alerts</div>
                    <div className="text-xs text-gray-500">Alert</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-indigo-100 rounded flex items-center justify-center mr-2">
                    <span className="text-indigo-600 text-xs">S</span>
                  </div>
                  <div>
                    <div className="text-sm">shic-test</div>
                    <div className="text-xs text-gray-500">
                      Azure OpenAI Account
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-2">
                    <span className="text-blue-600 text-xs">R</span>
                  </div>
                  <div>
                    <div className="text-sm">research-ea</div>
                    <div className="text-xs text-gray-500">
                      Virginia (eastus)
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-3">
                <div className="text-sm font-medium text-orange-500">4.7</div>
              </td>
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-50 rounded flex items-center justify-center mr-2">
                    <span className="text-red-500 text-xs">!</span>
                  </div>
                  <div>
                    <div className="text-sm">6 Alerts</div>
                    <div className="text-xs text-gray-500">Alert</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-indigo-100 rounded flex items-center justify-center mr-2">
                    <span className="text-indigo-600 text-xs">U</span>
                  </div>
                  <div>
                    <div className="text-sm">untitled_171136...</div>
                    <div className="text-xs text-gray-500">
                      GCP Vertex AI Tra...
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center mr-2">
                    <span className="text-orange-600 text-xs">O</span>
                  </div>
                  <div>
                    <div className="text-sm">osto-demo-01</div>
                    <div className="text-xs text-gray-500">
                      Council Bluffs (us-central1)
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-3">
                <div className="text-sm font-medium text-yellow-500">3.4</div>
              </td>
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-gray-50 rounded flex items-center justify-center mr-2">
                    <span className="text-gray-500 text-xs">D</span>
                  </div>
                  <div>
                    <div className="text-sm">Data protection</div>
                    <div className="text-xs text-gray-500">Data protection</div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

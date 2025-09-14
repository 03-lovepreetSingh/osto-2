'use client'

import React from 'react'
import {
  ChevronDown,
  GitBranch,
  Search,
  Plus,
  RefreshCw,
  Code,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from 'lucide-react'

export default function CISourcePage() {
  return (
    <div className="container mx-auto p-4 lg:p-6 max-w-full overflow-x-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <h1 className="text-xl sm:text-2xl font-medium">CI Source</h1>
          <div className="flex items-center border rounded px-2 py-1 w-fit">
            <span className="text-sm mr-2">All Sources</span>
            <ChevronDown size={14} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search repositories..."
              className="border rounded px-10 py-1.5 text-sm w-full sm:w-64"
            />
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center space-x-1 border rounded px-3 py-1.5 text-sm flex-1 sm:flex-initial justify-center">
              <RefreshCw size={14} className="mr-1" />
              <span>Refresh</span>
            </button>
            <button className="bg-blue-500 text-white rounded px-3 py-1.5 text-sm flex items-center flex-1 sm:flex-initial justify-center">
              <Plus size={14} className="mr-1" />
              <span className="hidden sm:inline">Connect Repository</span>
              <span className="sm:hidden">Connect</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Connected Sources</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>GitHub</span>
              <span className="font-medium">12 repositories</span>
            </div>
            <div className="flex justify-between">
              <span>GitLab</span>
              <span className="font-medium">5 repositories</span>
            </div>
            <div className="flex justify-between">
              <span>Bitbucket</span>
              <span className="font-medium">3 repositories</span>
            </div>
            <div className="flex justify-between">
              <span>Azure DevOps</span>
              <span className="font-medium">2 repositories</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Scan Status</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <CheckCircle size={16} className="mr-2 text-green-500" />
                <span>Clean</span>
              </div>
              <span className="font-medium">15</span>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <AlertTriangle size={16} className="mr-2 text-yellow-500" />
                <span>Warning</span>
              </div>
              <span className="font-medium">7</span>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <XCircle size={16} className="mr-2 text-red-500" />
                <span>Critical</span>
              </div>
              <span className="font-medium">0</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Scan Schedule</h2>
            <button className="text-blue-500 text-sm">Edit</button>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Frequency</span>
              <span className="font-medium">Daily</span>
            </div>
            <div className="flex justify-between">
              <span>Time</span>
              <span className="font-medium">02:00 UTC</span>
            </div>
            <div className="flex justify-between">
              <span>Last Scan</span>
              <span className="font-medium">Today, 02:00 UTC</span>
            </div>
            <div className="flex justify-between">
              <span>Next Scan</span>
              <span className="font-medium">Tomorrow, 02:00 UTC</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md border overflow-hidden mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b gap-4">
          <div className="flex items-center">
            <GitBranch size={18} className="mr-2 text-gray-500" />
            <h2 className="font-medium">Connected Repositories</h2>
          </div>
          <div className="flex items-center">
            <span className="text-sm mr-2">Sort by:</span>
            <button className="border rounded px-2 py-1 text-sm flex items-center">
              <span>Last Scan</span>
              <ChevronDown size={14} className="ml-1" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-gray-50 text-sm">
            <tr>
              <th className="text-left p-3">Repository</th>
              <th className="text-left p-3">Branch</th>
              <th className="text-left p-3">Source</th>
              <th className="text-left p-3">Last Scan</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">
                <div className="flex items-center">
                  <Code size={16} className="mr-2 text-blue-500" />
                  <span>osto-security/api-gateway</span>
                </div>
              </td>
              <td className="p-3">main</td>
              <td className="p-3">GitHub</td>
              <td className="p-3">Today, 02:00 UTC</td>
              <td className="p-3">
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-1 text-green-500" />
                  <span>Clean</span>
                </div>
              </td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline text-sm">
                  View Details
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-3">
                <div className="flex items-center">
                  <Code size={16} className="mr-2 text-blue-500" />
                  <span>osto-security/frontend-app</span>
                </div>
              </td>
              <td className="p-3">develop</td>
              <td className="p-3">GitHub</td>
              <td className="p-3">Today, 02:00 UTC</td>
              <td className="p-3">
                <div className="flex items-center">
                  <AlertTriangle size={16} className="mr-1 text-yellow-500" />
                  <span>3 Warnings</span>
                </div>
              </td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline text-sm">
                  View Details
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-3">
                <div className="flex items-center">
                  <Code size={16} className="mr-2 text-blue-500" />
                  <span>osto-security/backend-service</span>
                </div>
              </td>
              <td className="p-3">main</td>
              <td className="p-3">GitHub</td>
              <td className="p-3">Today, 02:00 UTC</td>
              <td className="p-3">
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-1 text-green-500" />
                  <span>Clean</span>
                </div>
              </td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline text-sm">
                  View Details
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-3">
                <div className="flex items-center">
                  <Code size={16} className="mr-2 text-blue-500" />
                  <span>osto-security/database-service</span>
                </div>
              </td>
              <td className="p-3">main</td>
              <td className="p-3">GitHub</td>
              <td className="p-3">Today, 02:00 UTC</td>
              <td className="p-3">
                <div className="flex items-center">
                  <AlertTriangle size={16} className="mr-1 text-yellow-500" />
                  <span>1 Warning</span>
                </div>
              </td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline text-sm">
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-3">
                <div className="flex items-center">
                  <Code size={16} className="mr-2 text-blue-500" />
                  <span>osto-security/monitoring-service</span>
                </div>
              </td>
              <td className="p-3">main</td>
              <td className="p-3">GitLab</td>
              <td className="p-3">Today, 02:00 UTC</td>
              <td className="p-3">
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-1 text-green-500" />
                  <span>Clean</span>
                </div>
              </td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline text-sm">
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-white p-4 rounded-md border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-medium">Detected Security Issues</h2>
          <button className="text-blue-500 text-sm">View All Issues</button>
        </div>
        <div className="space-y-3">
          <div className="p-3 border rounded">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <AlertTriangle size={16} className="mr-2 text-yellow-500" />
                <span className="font-medium">Hardcoded API Key</span>
              </div>
              <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-xs">
                Medium Risk
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-1">
              API key found in source code at
              osto-security/frontend-app/src/utils/api.js
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Detected: Today, 02:00 UTC</span>
              <button className="text-blue-500 hover:underline">
                Fix Instructions
              </button>
            </div>
          </div>
          <div className="p-3 border rounded">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <AlertTriangle size={16} className="mr-2 text-yellow-500" />
                <span className="font-medium">Vulnerable Dependency</span>
              </div>
              <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-xs">
                High Risk
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-1">
              Package &apos;log4j&apos; with known vulnerability (CVE-2021-44228) in
              osto-security/backend-service
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Detected: Today, 02:00 UTC</span>
              <button className="text-blue-500 hover:underline">
                Fix Instructions
              </button>
            </div>
          </div>
          <div className="p-3 border rounded">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <AlertTriangle size={16} className="mr-2 text-yellow-500" />
                <span className="font-medium">Insecure Configuration</span>
              </div>
              <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-xs">
                Medium Risk
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-1">
              Insecure CORS configuration found in
              osto-security/api-gateway/config/security.js
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Detected: Today, 02:00 UTC</span>
              <button className="text-blue-500 hover:underline">
                Fix Instructions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

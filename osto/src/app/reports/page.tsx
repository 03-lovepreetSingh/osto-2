'use client'

import React from 'react'
import {
  ChevronDown,
  Download,
  FileText,
  Calendar,
  Filter,
  RefreshCw,
} from 'lucide-react'

export default function ReportsLogsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-medium">Reports & Logs</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 border rounded px-3 py-1.5 text-sm">
            <Calendar size={14} className="mr-1" />
            <span>Last 7 Days</span>
            <ChevronDown size={14} className="ml-1" />
          </button>
          <button className="flex items-center space-x-1 border rounded px-3 py-1.5 text-sm">
            <Download size={14} className="mr-1" />
            <span>Export</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Security Summary</h2>
            <span className="text-xs text-gray-500">Last 7 days</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Critical Alerts</span>
              <span className="font-medium text-red-500">12</span>
            </div>
            <div className="flex justify-between">
              <span>High Alerts</span>
              <span className="font-medium text-orange-500">28</span>
            </div>
            <div className="flex justify-between">
              <span>Medium Alerts</span>
              <span className="font-medium text-yellow-500">45</span>
            </div>
            <div className="flex justify-between">
              <span>Low Alerts</span>
              <span className="font-medium text-green-500">67</span>
            </div>
            <div className="flex justify-between pt-2 border-t">
              <span className="font-medium">Total</span>
              <span className="font-medium">152</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Asset Coverage</h2>
            <span className="text-xs text-gray-500">Last updated: 2h ago</span>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Cloud Assets</span>
                <span className="text-sm font-medium">98%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: '98%',
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Kubernetes</span>
                <span className="text-sm font-medium">87%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: '87%',
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">AI Services</span>
                <span className="text-sm font-medium">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: '92%',
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">On-premise</span>
                <span className="text-sm font-medium">76%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: '76%',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Compliance Status</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 border rounded">
              <span>SOC 2</span>
              <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                Compliant
              </span>
            </div>
            <div className="flex items-center justify-between p-2 border rounded">
              <span>HIPAA</span>
              <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-xs">
                In Progress
              </span>
            </div>
            <div className="flex items-center justify-between p-2 border rounded">
              <span>PCI DSS</span>
              <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                Compliant
              </span>
            </div>
            <div className="flex items-center justify-between p-2 border rounded">
              <span>GDPR</span>
              <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md border mb-6">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <FileText size={18} className="mr-2 text-gray-500" />
            <h2 className="font-medium">Generated Reports</h2>
          </div>
          <button className="bg-blue-500 text-white rounded px-3 py-1 text-sm">
            Generate Report
          </button>
        </div>
        <div className="p-4">
          <table className="w-full">
            <thead className="bg-gray-50 text-sm">
              <tr>
                <th className="text-left p-2">Report Name</th>
                <th className="text-left p-2">Generated</th>
                <th className="text-left p-2">Type</th>
                <th className="text-left p-2">Size</th>
                <th className="text-left p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">
                  <div className="flex items-center">
                    <FileText size={16} className="mr-2 text-blue-500" />
                    <span>Monthly Security Summary - August 2024</span>
                  </div>
                </td>
                <td className="p-2">2024-08-15</td>
                <td className="p-2">PDF</td>
                <td className="p-2">4.2 MB</td>
                <td className="p-2">
                  <button className="text-blue-500 hover:underline text-sm flex items-center">
                    <Download size={14} className="mr-1" />
                    <span>Download</span>
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <div className="flex items-center">
                    <FileText size={16} className="mr-2 text-blue-500" />
                    <span>Compliance Audit Report Q3</span>
                  </div>
                </td>
                <td className="p-2">2024-08-10</td>
                <td className="p-2">PDF</td>
                <td className="p-2">7.8 MB</td>
                <td className="p-2">
                  <button className="text-blue-500 hover:underline text-sm flex items-center">
                    <Download size={14} className="mr-1" />
                    <span>Download</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <FileText size={16} className="mr-2 text-blue-500" />
                    <span>Security Incident Report - July 2024</span>
                  </div>
                </td>
                <td className="p-2">2024-07-28</td>
                <td className="p-2">PDF</td>
                <td className="p-2">2.1 MB</td>
                <td className="p-2">
                  <button className="text-blue-500 hover:underline text-sm flex items-center">
                    <Download size={14} className="mr-1" />
                    <span>Download</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white rounded-md border">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <FileText size={18} className="mr-2 text-gray-500" />
            <h2 className="font-medium">System Logs</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-1 border rounded px-2 py-1 text-sm">
              <Filter size={14} className="mr-1" />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-1 border rounded px-2 py-1 text-sm">
              <RefreshCw size={14} className="mr-1" />
              <span>Refresh</span>
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4 flex items-center">
            <select className="border rounded px-2 py-1 text-sm mr-2">
              <option>All Log Types</option>
              <option>Security</option>
              <option>System</option>
              <option>Access</option>
              <option>Audit</option>
            </select>
            <select className="border rounded px-2 py-1 text-sm mr-2">
              <option>All Severities</option>
              <option>Critical</option>
              <option>Error</option>
              <option>Warning</option>
              <option>Info</option>
            </select>
            <input
              type="text"
              placeholder="Search logs..."
              className="border rounded px-3 py-1 text-sm ml-auto"
            />
          </div>
          <div className="bg-gray-50 p-2 rounded border font-mono text-xs overflow-x-auto">
            <div className="mb-1 flex">
              <span className="text-gray-500 w-40">2024-08-16 14:32:15</span>
              <span className="bg-red-100 text-red-600 px-1 rounded w-20 text-center mr-2">
                CRITICAL
              </span>
              <span>
                Failed login attempt for user admin@orcademo.com from IP
                192.168.1.254 (5th attempt)
              </span>
            </div>
            <div className="mb-1 flex">
              <span className="text-gray-500 w-40">2024-08-16 14:30:22</span>
              <span className="bg-orange-100 text-orange-600 px-1 rounded w-20 text-center mr-2">
                ERROR
              </span>
              <span>
                Failed login attempt for user admin@orcademo.com from IP
                192.168.1.254 (4th attempt)
              </span>
            </div>
            <div className="mb-1 flex">
              <span className="text-gray-500 w-40">2024-08-16 14:28:17</span>
              <span className="bg-yellow-100 text-yellow-600 px-1 rounded w-20 text-center mr-2">
                WARNING
              </span>
              <span>
                API rate limit exceeded for endpoint /api/v1/assets from IP
                192.168.1.100
              </span>
            </div>
            <div className="mb-1 flex">
              <span className="text-gray-500 w-40">2024-08-16 14:25:03</span>
              <span className="bg-blue-100 text-blue-600 px-1 rounded w-20 text-center mr-2">
                INFO
              </span>
              <span>User john.doe@orcademo.com logged in successfully</span>
            </div>
            <div className="mb-1 flex">
              <span className="text-gray-500 w-40">2024-08-16 14:22:45</span>
              <span className="bg-blue-100 text-blue-600 px-1 rounded w-20 text-center mr-2">
                INFO
              </span>
              <span>System backup completed successfully</span>
            </div>
            <div className="mb-1 flex">
              <span className="text-gray-500 w-40">2024-08-16 14:15:30</span>
              <span className="bg-yellow-100 text-yellow-600 px-1 rounded w-20 text-center mr-2">
                WARNING
              </span>
              <span>High CPU usage detected on node-02 (87%)</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-40">2024-08-16 14:10:12</span>
              <span className="bg-blue-100 text-blue-600 px-1 rounded w-20 text-center mr-2">
                INFO
              </span>
              <span>
                Configuration change: Updated security policy by user
                admin@orcademo.com
              </span>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Showing 7 of 1,245 log entries
            </div>
            <div className="flex items-center">
              <button className="border rounded-l px-3 py-1 text-sm">
                Previous
              </button>
              <button className="border-t border-b border-r px-3 py-1 text-sm bg-blue-50 text-blue-600">
                1
              </button>
              <button className="border-t border-b border-r px-3 py-1 text-sm">
                2
              </button>
              <button className="border-t border-b border-r px-3 py-1 text-sm">
                3
              </button>
              <button className="border-t border-b border-r rounded-r px-3 py-1 text-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

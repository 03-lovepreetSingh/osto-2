'use client'

import React from 'react'
import {
  ChevronDown,
  Search,
  Filter,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
} from 'lucide-react'

export default function AlertsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-medium">Alerts</h1>
          <div className="ml-4 flex items-center border rounded px-2 py-1">
            <span className="text-sm mr-2">All Alerts</span>
            <ChevronDown size={14} />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search alerts..."
              className="border rounded px-10 py-1.5 text-sm w-64"
            />
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
          <button className="flex items-center space-x-1 border rounded px-3 py-1.5 text-sm">
            <Filter size={14} className="mr-1" />
            <span>Filter</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-medium">Total Alerts</h2>
          </div>
          <div className="flex items-center">
            <div className="text-3xl font-bold">152</div>
            <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
              +12 today
            </span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-medium">Critical</h2>
          </div>
          <div className="flex items-center">
            <div className="text-3xl font-bold text-red-500">24</div>
            <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
              +3 today
            </span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-medium">High</h2>
          </div>
          <div className="flex items-center">
            <div className="text-3xl font-bold text-orange-500">48</div>
            <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded">
              +5 today
            </span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-medium">Medium/Low</h2>
          </div>
          <div className="flex items-center">
            <div className="text-3xl font-bold text-yellow-500">80</div>
            <span className="ml-2 text-xs bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded">
              +4 today
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md border overflow-hidden mb-6">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <AlertTriangle size={18} className="mr-2 text-red-500" />
            <h2 className="font-medium">Critical Alerts</h2>
          </div>
          <div className="flex items-center">
            <span className="text-sm mr-2">Sort by:</span>
            <button className="border rounded px-2 py-1 text-sm flex items-center">
              <span>Newest</span>
              <ChevronDown size={14} className="ml-1" />
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 text-sm">
            <tr>
              <th className="text-left p-3">Alert</th>
              <th className="text-left p-3">Asset</th>
              <th className="text-left p-3">Risk Score</th>
              <th className="text-left p-3">Time</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">
                <div className="flex items-center">
                  <AlertTriangle size={16} className="mr-2 text-red-500" />
                  <span>Public S3 bucket with sensitive data</span>
                </div>
              </td>
              <td className="p-3">aws-s3-bucket-data-storage</td>
              <td className="p-3">
                <div className="bg-red-500 text-white font-bold rounded px-2 py-1 w-10 text-center">
                  9.8
                </div>
              </td>
              <td className="p-3">10m ago</td>
              <td className="p-3">
                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs">
                  Open
                </span>
              </td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline text-sm">
                  Investigate
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-3">
                <div className="flex items-center">
                  <AlertTriangle size={16} className="mr-2 text-red-500" />
                  <span>Unencrypted database backup</span>
                </div>
              </td>
              <td className="p-3">rds-postgres-prod</td>
              <td className="p-3">
                <div className="bg-red-500 text-white font-bold rounded px-2 py-1 w-10 text-center">
                  8.7
                </div>
              </td>
              <td className="p-3">1h ago</td>
              <td className="p-3">
                <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-xs">
                  In Progress
                </span>
              </td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline text-sm">
                  Investigate
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-3">
                <div className="flex items-center">
                  <AlertTriangle size={16} className="mr-2 text-red-500" />
                  <span>
                    Azure OpenAI account local authentication method is enabled
                  </span>
                </div>
              </td>
              <td className="p-3">seashell-openai-account</td>
              <td className="p-3">
                <div className="bg-orange-500 text-white font-bold rounded px-2 py-1 w-10 text-center">
                  7.5
                </div>
              </td>
              <td className="p-3">3h ago</td>
              <td className="p-3">
                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs">
                  Assigned
                </span>
              </td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline text-sm">
                  Investigate
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-white rounded-md border overflow-hidden mb-6">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <AlertTriangle size={18} className="mr-2 text-orange-500" />
            <h2 className="font-medium">High Alerts</h2>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 text-sm">
            <tr>
              <th className="text-left p-3">Alert</th>
              <th className="text-left p-3">Asset</th>
              <th className="text-left p-3">Risk Score</th>
              <th className="text-left p-3">Time</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">
                <div className="flex items-center">
                  <AlertTriangle size={16} className="mr-2 text-orange-500" />
                  <span>EC2 instance with public SSH access</span>
                </div>
              </td>
              <td className="p-3">ec2-web-server-prod</td>
              <td className="p-3">
                <div className="bg-orange-500 text-white font-bold rounded px-2 py-1 w-10 text-center">
                  7.2
                </div>
              </td>
              <td className="p-3">2h ago</td>
              <td className="p-3">
                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs">
                  Open
                </span>
              </td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline text-sm">
                  Investigate
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-3">
                <div className="flex items-center">
                  <AlertTriangle size={16} className="mr-2 text-orange-500" />
                  <span>Kubernetes RBAC misconfiguration</span>
                </div>
              </td>
              <td className="p-3">eks-cluster-prod</td>
              <td className="p-3">
                <div className="bg-orange-500 text-white font-bold rounded px-2 py-1 w-10 text-center">
                  6.8
                </div>
              </td>
              <td className="p-3">5h ago</td>
              <td className="p-3">
                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                  Resolved
                </span>
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
                  <AlertTriangle size={16} className="mr-2 text-orange-500" />
                  <span>API Gateway missing rate limiting</span>
                </div>
              </td>
              <td className="p-3">api-gateway-customer</td>
              <td className="p-3">
                <div className="bg-orange-500 text-white font-bold rounded px-2 py-1 w-10 text-center">
                  6.5
                </div>
              </td>
              <td className="p-3">8h ago</td>
              <td className="p-3">
                <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-xs">
                  In Progress
                </span>
              </td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline text-sm">
                  Investigate
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Alert Trends</h2>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Critical Alerts</span>
                <span className="text-sm font-medium">+15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{
                    width: '24%',
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">High Alerts</span>
                <span className="text-sm font-medium">+8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{
                    width: '32%',
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Medium Alerts</span>
                <span className="text-sm font-medium">-5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{
                    width: '28%',
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Low Alerts</span>
                <span className="text-sm font-medium">-12%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{
                    width: '16%',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Alert Categories</h2>
          </div>
          <div className="space-y-2">
            <div className="flex items-center p-2 border rounded">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 mr-3">
                <AlertTriangle size={16} />
              </div>
              <div>
                <div className="font-medium">Authentication Issues</div>
                <div className="text-xs text-gray-500">38 alerts</div>
              </div>
              <div className="ml-auto">
                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs">
                  12 Critical
                </span>
              </div>
            </div>
            <div className="flex items-center p-2 border rounded">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-3">
                <XCircle size={16} />
              </div>
              <div>
                <div className="font-medium">Access Control</div>
                <div className="text-xs text-gray-500">45 alerts</div>
              </div>
              <div className="ml-auto">
                <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-xs">
                  8 Critical
                </span>
              </div>
            </div>
            <div className="flex items-center p-2 border rounded">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 mr-3">
                <Info size={16} />
              </div>
              <div>
                <div className="font-medium">Encryption</div>
                <div className="text-xs text-gray-500">29 alerts</div>
              </div>
              <div className="ml-auto">
                <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-xs">
                  3 Critical
                </span>
              </div>
            </div>
            <div className="flex items-center p-2 border rounded">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3">
                <CheckCircle size={16} />
              </div>
              <div>
                <div className="font-medium">Compliance</div>
                <div className="text-xs text-gray-500">40 alerts</div>
              </div>
              <div className="ml-auto">
                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs">
                  1 Critical
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

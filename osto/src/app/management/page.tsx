'use client'

import React from 'react'
import {
  Settings,
  Globe,
  Database,
  Code,
  Bell,
  Shield,
  RefreshCw,
} from 'lucide-react'

export default function ManagementPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-medium">Management</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center mb-4">
            <Settings size={18} className="mr-2 text-gray-500" />
            <h2 className="font-medium">System Status</h2>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>System Health</span>
            <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
              Operational
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>Database</span>
            <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
              Operational
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>API Services</span>
            <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
              Operational
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>Monitoring</span>
            <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
              Operational
            </span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center mb-4">
            <Globe size={18} className="mr-2 text-gray-500" />
            <h2 className="font-medium">Environment</h2>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>Current Environment</span>
            <span className="font-medium">Production</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>Region</span>
            <span className="font-medium">US-West</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>Version</span>
            <span className="font-medium">v2.4.1</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Last Updated</span>
            <span className="font-medium">2 days ago</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center mb-4">
            <Database size={18} className="mr-2 text-gray-500" />
            <h2 className="font-medium">Storage</h2>
          </div>
          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <span className="text-sm">Database Storage</span>
              <span className="text-sm font-medium">67%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{
                  width: '67%',
                }}
              ></div>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <span className="text-sm">File Storage</span>
              <span className="text-sm font-medium">42%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{
                  width: '42%',
                }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Backup Storage</span>
              <span className="text-sm font-medium">28%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{
                  width: '28%',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Code size={18} className="mr-2 text-gray-500" />
              <h2 className="font-medium">API Management</h2>
            </div>
            <button className="text-blue-500 text-sm">View All</button>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-2">API Key</th>
                <th className="text-left p-2">Created</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">
                  <div className="font-mono">orca_api_k3y...8f92</div>
                  <div className="text-xs text-gray-500">Production API</div>
                </td>
                <td className="p-2">2024-08-01</td>
                <td className="p-2">
                  <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                    Active
                  </span>
                </td>
                <td className="p-2">
                  <button className="text-blue-500 hover:underline text-sm">
                    Manage
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <div className="font-mono">orca_api_t3st...4a21</div>
                  <div className="text-xs text-gray-500">Testing API</div>
                </td>
                <td className="p-2">2024-07-15</td>
                <td className="p-2">
                  <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                    Active
                  </span>
                </td>
                <td className="p-2">
                  <button className="text-blue-500 hover:underline text-sm">
                    Manage
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="font-mono">orca_api_d3v...9c74</div>
                  <div className="text-xs text-gray-500">Development API</div>
                </td>
                <td className="p-2">2024-06-22</td>
                <td className="p-2">
                  <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-xs">
                    Restricted
                  </span>
                </td>
                <td className="p-2">
                  <button className="text-blue-500 hover:underline text-sm">
                    Manage
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Bell size={18} className="mr-2 text-gray-500" />
              <h2 className="font-medium">Notifications</h2>
            </div>
            <button className="text-blue-500 text-sm">Configure</button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 border rounded">
              <div>
                <div className="font-medium">Email Notifications</div>
                <div className="text-xs text-gray-500">
                  Send security alerts to admin@orcademo.com
                </div>
              </div>
              <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                Enabled
              </span>
            </div>
            <div className="flex items-center justify-between p-2 border rounded">
              <div>
                <div className="font-medium">Slack Integration</div>
                <div className="text-xs text-gray-500">
                  Connected to #security-alerts channel
                </div>
              </div>
              <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                Enabled
              </span>
            </div>
            <div className="flex items-center justify-between p-2 border rounded">
              <div>
                <div className="font-medium">SMS Notifications</div>
                <div className="text-xs text-gray-500">
                  Critical alerts only
                </div>
              </div>
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
                Disabled
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-md border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Shield size={18} className="mr-2 text-gray-500" />
            <h2 className="font-medium">Maintenance & Updates</h2>
          </div>
          <button className="flex items-center text-blue-500 text-sm">
            <RefreshCw size={14} className="mr-1" />
            <span>Check for Updates</span>
          </button>
        </div>
        <div className="mb-4">
          <div className="p-3 bg-blue-50 border border-blue-100 rounded">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                <Shield size={16} />
              </div>
              <div>
                <h3 className="font-medium">Security Update Available</h3>
                <p className="text-sm text-gray-600">
                  Version 2.4.2 includes important security patches
                </p>
              </div>
              <button className="ml-auto bg-blue-500 text-white rounded px-3 py-1 text-sm">
                Install Update
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-medium mb-2">Update History</h3>
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-2">Version</th>
                <th className="text-left p-2">Date</th>
                <th className="text-left p-2">Type</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">v2.4.1</td>
                <td className="p-2">2024-08-14</td>
                <td className="p-2">Feature Update</td>
                <td className="p-2">
                  <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                    Installed
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">v2.4.0</td>
                <td className="p-2">2024-07-28</td>
                <td className="p-2">Major Release</td>
                <td className="p-2">
                  <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                    Installed
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-2">v2.3.5</td>
                <td className="p-2">2024-06-15</td>
                <td className="p-2">Security Patch</td>
                <td className="p-2">
                  <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                    Installed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

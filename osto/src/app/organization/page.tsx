'use client'

import React from 'react'
import {
  ChevronDown,
  Users,
  Building,
  Globe,
  Search,
  Plus,
  Edit,
  Trash2,
} from 'lucide-react'

export default function OrganizationPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-medium">Organization</h1>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search organizations..."
              className="border rounded px-10 py-1.5 text-sm w-64"
            />
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
          <button className="bg-blue-500 text-white rounded px-3 py-1.5 text-sm flex items-center">
            <Plus size={14} className="mr-1" />
            <span>Add Organization</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center mb-4">
            <Building size={18} className="mr-2 text-gray-500" />
            <h2 className="font-medium">Organization Structure</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Organizations</span>
              <span className="font-medium">3</span>
            </div>
            <div className="flex justify-between">
              <span>Business Units</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex justify-between">
              <span>Teams</span>
              <span className="font-medium">47</span>
            </div>
            <div className="flex justify-between">
              <span>Projects</span>
              <span className="font-medium">156</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center mb-4">
            <Users size={18} className="mr-2 text-gray-500" />
            <h2 className="font-medium">Users & Access</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Total Users</span>
              <span className="font-medium">284</span>
            </div>
            <div className="flex justify-between">
              <span>Active Users</span>
              <span className="font-medium">256</span>
            </div>
            <div className="flex justify-between">
              <span>Admins</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex justify-between">
              <span>Pending Invitations</span>
              <span className="font-medium">5</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center mb-4">
            <Globe size={18} className="mr-2 text-gray-500" />
            <h2 className="font-medium">Global Settings</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Default Region</span>
              <span className="font-medium">US-West</span>
            </div>
            <div className="flex justify-between">
              <span>Default Language</span>
              <span className="font-medium">English (US)</span>
            </div>
            <div className="flex justify-between">
              <span>Time Zone</span>
              <span className="font-medium">UTC-07:00</span>
            </div>
            <div className="flex justify-between">
              <span>Date Format</span>
              <span className="font-medium">MM/DD/YYYY</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md border overflow-hidden mb-6">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <Building size={18} className="mr-2 text-gray-500" />
            <h2 className="font-medium">Organizations</h2>
          </div>
          <div className="flex items-center">
            <span className="text-sm mr-2">Sort by:</span>
            <button className="border rounded px-2 py-1 text-sm flex items-center">
              <span>Name</span>
              <ChevronDown size={14} className="ml-1" />
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 text-sm">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">ID</th>
              <th className="text-left p-3">Business Units</th>
              <th className="text-left p-3">Users</th>
              <th className="text-left p-3">Created</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                    O
                  </div>
                  <span>Osto Security</span>
                </div>
              </td>
              <td className="p-3">org-001</td>
              <td className="p-3">5</td>
              <td className="p-3">128</td>
              <td className="p-3">Jan 10, 2022</td>
              <td className="p-3">
                <div className="flex items-center">
                  <button className="text-blue-500 hover:underline text-sm mr-2">
                    Edit
                  </button>
                  <button className="text-blue-500 hover:underline text-sm">
                    View
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
                    S
                  </div>
                  <span>Seashell Technologies</span>
                </div>
              </td>
              <td className="p-3">org-002</td>
              <td className="p-3">4</td>
              <td className="p-3">96</td>
              <td className="p-3">Mar 22, 2022</td>
              <td className="p-3">
                <div className="flex items-center">
                  <button className="text-blue-500 hover:underline text-sm mr-2">
                    Edit
                  </button>
                  <button className="text-blue-500 hover:underline text-sm">
                    View
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white mr-2">
                    C
                  </div>
                  <span>Cloud Systems Inc.</span>
                </div>
              </td>
              <td className="p-3">org-003</td>
              <td className="p-3">3</td>
              <td className="p-3">60</td>
              <td className="p-3">Jun 5, 2022</td>
              <td className="p-3">
                <div className="flex items-center">
                  <button className="text-blue-500 hover:underline text-sm mr-2">
                    Edit
                  </button>
                  <button className="text-blue-500 hover:underline text-sm">
                    View
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Business Units</h2>
            <button className="text-blue-500 text-sm flex items-center">
              <Plus size={14} className="mr-1" />
              <span>Add Unit</span>
            </button>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Organization</th>
                <th className="text-left p-2">Teams</th>
                <th className="text-left p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">
                  <div className="flex items-center">
                    <span>Engineering</span>
                  </div>
                </td>
                <td className="p-2">Osto Security</td>
                <td className="p-2">12</td>
                <td className="p-2">
                  <div className="flex items-center">
                    <button className="text-gray-500 hover:text-blue-500 mr-2">
                      <Edit size={14} />
                    </button>
                    <button className="text-gray-500 hover:text-red-500">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <div className="flex items-center">
                    <span>Product</span>
                  </div>
                </td>
                <td className="p-2">Osto Security</td>
                <td className="p-2">8</td>
                <td className="p-2">
                  <div className="flex items-center">
                    <button className="text-gray-500 hover:text-blue-500 mr-2">
                      <Edit size={14} />
                    </button>
                    <button className="text-gray-500 hover:text-red-500">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <span>Sales</span>
                  </div>
                </td>
                <td className="p-2">Osto Security</td>
                <td className="p-2">6</td>
                <td className="p-2">
                  <div className="flex items-center">
                    <button className="text-gray-500 hover:text-blue-500 mr-2">
                      <Edit size={14} />
                    </button>
                    <button className="text-gray-500 hover:text-red-500">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Organization Settings</h2>
            <button className="text-blue-500 text-sm">Save Changes</button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Organization Name
              </label>
              <input
                type="text"
                className="border rounded px-3 py-2 w-full"
                value="Osto Security"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Organization ID
              </label>
              <input
                type="text"
                className="border rounded px-3 py-2 w-full bg-gray-50"
                value="org-001"
                disabled
              />
              <p className="text-xs text-gray-500 mt-1">
                Organization ID cannot be changed
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                className="border rounded px-3 py-2 w-full"
                rows={3}
                value="Main organization for Osto Security operations and management."
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Organization Admin
              </label>
              <select className="border rounded px-3 py-2 w-full">
                <option>admin@ostodemo.com</option>
                <option>security@ostodemo.com</option>
                <option>management@ostodemo.com</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Notification Settings
              </label>
              <div className="space-y-2 mt-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="emailNotif"
                    className="mr-2"
                    checked
                  />
                  <label htmlFor="emailNotif" className="text-sm">
                    Email Notifications
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="slackNotif"
                    className="mr-2"
                    checked
                  />
                  <label htmlFor="slackNotif" className="text-sm">
                    Slack Notifications
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="weeklyReport"
                    className="mr-2"
                    checked
                  />
                  <label htmlFor="weeklyReport" className="text-sm">
                    Weekly Summary Reports
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

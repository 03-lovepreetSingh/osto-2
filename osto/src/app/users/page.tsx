'use client'

import React, { useState } from 'react'
import {
  ChevronDown,
  Search,
  Plus,
  UserPlus,
  Shield,
  Settings,
  Key,
  X,
  Check,
  Mail,
  User,
  Lock,
  AlertCircle,
  Clock,
} from 'lucide-react'

// Define types for our data
interface UserType {
  id: string
  name: string
  email: string
  role: string
  status: 'Active' | 'Inactive'
  lastLogin: string
  avatar: string
}
interface RoleType {
  id: string
  name: string
  description: string
  permissions: string[]
  color: string
}
interface AuthSettingType {
  id: string
  name: string
  description: string
  enabled: boolean
  icon: React.ReactNode
}
export default function UsersPermissionsPage() {
  // Users state
  const [users, setUsers] = useState<UserType[]>([
    {
      id: 'user1',
      name: 'Admin User',
      email: 'admin@ostodemo.com',
      role: 'Administrator',
      status: 'Active',
      lastLogin: 'Just now',
      avatar: 'A',
    },
    {
      id: 'user2',
      name: 'Security Manager',
      email: 'security@ostodemo.com',
      role: 'Security Manager',
      status: 'Active',
      lastLogin: '2h ago',
      avatar: 'S',
    },
    {
      id: 'user3',
      name: 'DevOps User',
      email: 'devops@ostodemo.com',
      role: 'DevOps',
      status: 'Active',
      lastLogin: '1d ago',
      avatar: 'D',
    },
    {
      id: 'user4',
      name: 'Viewer User',
      email: 'viewer@ostodemo.com',
      role: 'Viewer',
      status: 'Inactive',
      lastLogin: '30d ago',
      avatar: 'V',
    },
  ])
  // Roles state
  const [roles, setRoles] = useState<RoleType[]>([
    {
      id: 'role1',
      name: 'Administrator',
      description: 'Full access to all system resources and settings',
      permissions: ['All Permissions'],
      color: 'text-red-500',
    },
    {
      id: 'role2',
      name: 'Security Manager',
      description: 'Manage security settings and respond to alerts',
      permissions: [
        'View Alerts',
        'Manage Alerts',
        'View Inventory',
        'Security Settings',
      ],
      color: 'text-orange-500',
    },
    {
      id: 'role3',
      name: 'DevOps',
      description: 'Manage infrastructure and deployments',
      permissions: [
        'View Alerts',
        'View Inventory',
        'Manage Inventory',
        'Cluster Management',
      ],
      color: 'text-blue-500',
    },
    {
      id: 'role4',
      name: 'Viewer',
      description: 'View-only access to dashboards and reports',
      permissions: ['View Alerts', 'View Inventory', 'View Reports'],
      color: 'text-gray-500',
    },
  ])
  // Auth settings state
  const [authSettings, setAuthSettings] = useState([
    {
      id: 'mfa',
      name: 'Multi-Factor Authentication',
      description: 'Require two-factor authentication for all users',
      enabled: true,
      icon: <Settings size={16} className="mr-2 text-gray-500" />,
    },
    {
      id: 'sso',
      name: 'SSO Integration',
      description: 'Enable single sign-on with corporate identity provider',
      enabled: true,
      icon: <Key size={16} className="mr-2 text-gray-500" />,
    },
    {
      id: 'password',
      name: 'Password Policy',
      description: 'Enforce strong password requirements',
      enabled: true,
      icon: <Shield size={16} className="mr-2 text-gray-500" />,
    },
    {
      id: 'jit',
      name: 'Just-in-time Access',
      description: 'Enable temporary elevated access for administrative tasks',
      enabled: false,
      icon: <Clock size={16} className="mr-2 text-gray-500" />,
    },
  ])
  // Search state
  const [searchQuery, setSearchQuery] = useState('')
  // Modal states
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<UserType | null>(null)
  const [isManageRolesModalOpen, setIsManageRolesModalOpen] = useState(false)
  const [isConfigureAuthModalOpen, setIsConfigureAuthModalOpen] =
    useState(false)
  const [editingRole, setEditingRole] = useState<RoleType | null>(null)
  // Form states
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'Viewer',
    status: 'Active',
  })
  // Available permissions for role management
  const availablePermissions = [
    'View Alerts',
    'Manage Alerts',
    'View Inventory',
    'Manage Inventory',
    'Security Settings',
    'Cluster Management',
    'User Management',
    'Role Management',
    'View Reports',
    'Manage Reports',
    'API Access',
    'System Configuration',
  ]
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }
  // Filtered users based on search
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  // Handle adding a new user
  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) return
    const newId = `user${users.length + 1}`
    const avatar = newUser.name.charAt(0).toUpperCase()
    const userToAdd: UserType = {
      id: newId,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: newUser.status as 'Active' | 'Inactive',
      lastLogin: 'Never',
      avatar: avatar,
    }
    setUsers([...users, userToAdd])
    setNewUser({
      name: '',
      email: '',
      role: 'Viewer',
      status: 'Active',
    })
    setIsAddUserModalOpen(false)
  }
  // Handle editing a user
  const handleEditUser = () => {
    if (!editingUser) return
    const updatedUsers = users.map((user) =>
      user.id === editingUser.id ? editingUser : user,
    )
    setUsers(updatedUsers)
    setEditingUser(null)
  }
  // Handle editing a role
  const handleEditRole = () => {
    if (!editingRole) return
    const updatedRoles = roles.map((role) =>
      role.id === editingRole.id ? editingRole : role,
    )
    setRoles(updatedRoles)
    setEditingRole(null)
  }
  // Handle toggling auth setting
  const handleToggleAuthSetting = (id: string) => {
    const updatedSettings = authSettings.map((setting) =>
      setting.id === id
        ? {
            ...setting,
            enabled: !setting.enabled,
          }
        : setting,
    )
    setAuthSettings(updatedSettings)
  }
  // Handle adding/removing permission from a role
  const handleTogglePermission = (permission: string) => {
    if (!editingRole) return
    let updatedPermissions
    if (editingRole.permissions.includes(permission)) {
      updatedPermissions = editingRole.permissions.filter(
        (p) => p !== permission,
      )
    } else {
      updatedPermissions = [...editingRole.permissions, permission]
    }
    setEditingRole({
      ...editingRole,
      permissions: updatedPermissions,
    })
  }
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-medium">Users & Permissions</h1>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              className="border rounded px-10 py-1.5 text-sm w-64"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
          <button
            className="bg-blue-500 text-white rounded px-3 py-1.5 text-sm flex items-center"
            onClick={() => setIsAddUserModalOpen(true)}
          >
            <UserPlus size={14} className="mr-1" />
            <span>Add User</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-md border overflow-hidden mb-6">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-medium">Users</h2>
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
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Role</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Last Login</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-3">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full ${user.role === 'Administrator' ? 'bg-blue-500' : user.role === 'Security Manager' ? 'bg-green-500' : user.role === 'DevOps' ? 'bg-purple-500' : 'bg-gray-500'} flex items-center justify-center text-white mr-2`}
                    >
                      {user.avatar}
                    </div>
                    <span>{user.name}</span>
                  </div>
                </td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">
                  <div className="flex items-center">
                    <Shield
                      size={14}
                      className={`mr-1 ${user.role === 'Administrator' ? 'text-red-500' : user.role === 'Security Manager' ? 'text-orange-500' : user.role === 'DevOps' ? 'text-blue-500' : 'text-gray-500'}`}
                    />
                    <span>{user.role}</span>
                  </div>
                </td>
                <td className="p-3">
                  <span
                    className={`${user.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'} px-2 py-0.5 rounded text-xs`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-3">{user.lastLogin}</td>
                <td className="p-3">
                  <button
                    className="text-blue-500 hover:underline text-sm"
                    onClick={() => setEditingUser(user)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Roles & Permissions</h2>
            <button
              className="text-blue-500 text-sm"
              onClick={() => setIsManageRolesModalOpen(true)}
            >
              Manage Roles
            </button>
          </div>
          <div className="space-y-3">
            {roles.map((role) => (
              <div key={role.id} className="p-3 border rounded">
                <div className="flex items-center">
                  <Shield size={16} className={`mr-2 ${role.color}`} />
                  <span className="font-medium">{role.name}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{role.description}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {role.permissions.map((permission, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-xs px-2 py-0.5 rounded"
                    >
                      {permission}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Authentication Settings</h2>
            <button
              className="text-blue-500 text-sm"
              onClick={() => setIsConfigureAuthModalOpen(true)}
            >
              Configure
            </button>
          </div>
          <div className="space-y-4">
            {authSettings.map((setting) => (
              <div
                key={setting.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  {setting.icon}
                  <span>{setting.name}</span>
                </div>
                <span
                  className={`${setting.enabled ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'} px-2 py-0.5 rounded text-xs`}
                >
                  {setting.enabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            ))}
            <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded">
              <h3 className="text-sm font-medium text-blue-700 mb-1">
                Security Recommendation
              </h3>
              <p className="text-xs text-blue-600">
                Enable just-in-time access for administrative roles to enhance
                security posture.
              </p>
              <button className="mt-2 text-xs text-blue-700 font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      {isAddUserModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Add New User</h3>
              <button
                onClick={() => setIsAddUserModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={newUser.name}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        name: e.target.value,
                      })
                    }
                    className="w-full border rounded-md pl-10 pr-3 py-2 text-sm"
                    placeholder="Enter user's full name"
                  />
                  <User
                    size={16}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        email: e.target.value,
                      })
                    }
                    className="w-full border rounded-md pl-10 pr-3 py-2 text-sm"
                    placeholder="Enter email address"
                  />
                  <Mail
                    size={16}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Role
                </label>
                <select
                  id="role"
                  value={newUser.role}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      role: e.target.value,
                    })
                  }
                  className="w-full border rounded-md px-3 py-2 text-sm"
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.name}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Status
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="status"
                      value="Active"
                      checked={newUser.status === 'Active'}
                      onChange={() =>
                        setNewUser({
                          ...newUser,
                          status: 'Active',
                        })
                      }
                      className="mr-1"
                    />
                    <span className="text-sm">Active</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="status"
                      value="Inactive"
                      checked={newUser.status === 'Inactive'}
                      onChange={() =>
                        setNewUser({
                          ...newUser,
                          status: 'Inactive',
                        })
                      }
                      className="mr-1"
                    />
                    <span className="text-sm">Inactive</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsAddUserModalOpen(false)}
                className="px-4 py-2 border rounded-md text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAddUser}
                disabled={!newUser.name || !newUser.email}
                className={`px-4 py-2 rounded-md text-sm text-white ${newUser.name && newUser.email ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-300 cursor-not-allowed'}`}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Edit User</h3>
              <button
                onClick={() => setEditingUser(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="edit-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="edit-name"
                    value={editingUser.name}
                    onChange={(e) =>
                      setEditingUser({
                        ...editingUser,
                        name: e.target.value,
                      })
                    }
                    className="w-full border rounded-md pl-10 pr-3 py-2 text-sm"
                  />
                  <User
                    size={16}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="edit-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="edit-email"
                    value={editingUser.email}
                    onChange={(e) =>
                      setEditingUser({
                        ...editingUser,
                        email: e.target.value,
                      })
                    }
                    className="w-full border rounded-md pl-10 pr-3 py-2 text-sm"
                  />
                  <Mail
                    size={16}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="edit-role"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Role
                </label>
                <select
                  id="edit-role"
                  value={editingUser.role}
                  onChange={(e) =>
                    setEditingUser({
                      ...editingUser,
                      role: e.target.value,
                    })
                  }
                  className="w-full border rounded-md px-3 py-2 text-sm"
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.name}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="edit-status"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Status
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="edit-status"
                      value="Active"
                      checked={editingUser.status === 'Active'}
                      onChange={() =>
                        setEditingUser({
                          ...editingUser,
                          status: 'Active',
                        })
                      }
                      className="mr-1"
                    />
                    <span className="text-sm">Active</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="edit-status"
                      value="Inactive"
                      checked={editingUser.status === 'Inactive'}
                      onChange={() =>
                        setEditingUser({
                          ...editingUser,
                          status: 'Inactive',
                        })
                      }
                      className="mr-1"
                    />
                    <span className="text-sm">Inactive</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setEditingUser(null)}
                className="px-4 py-2 border rounded-md text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleEditUser}
                disabled={!editingUser.name || !editingUser.email}
                className={`px-4 py-2 rounded-md text-sm text-white ${editingUser.name && editingUser.email ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-300 cursor-not-allowed'}`}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Manage Roles Modal */}
      {isManageRolesModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">
                Manage Roles & Permissions
              </h3>
              <button
                onClick={() => setIsManageRolesModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-3">Available Roles</h4>
                <div className="space-y-2">
                  {roles.map((role) => (
                    <div
                      key={role.id}
                      className={`p-3 border rounded-md cursor-pointer ${editingRole?.id === role.id ? 'border-blue-500 bg-blue-50' : ''}`}
                      onClick={() =>
                        setEditingRole({
                          ...role,
                        })
                      }
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Shield size={16} className={`mr-2 ${role.color}`} />
                          <span className="font-medium">{role.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {role.permissions.length} permissions
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="mt-3 w-full border border-dashed rounded-md p-2 text-sm text-gray-500 flex items-center justify-center"
                  onClick={() => {
                    const newId = `role${roles.length + 1}`
                    setEditingRole({
                      id: newId,
                      name: 'New Role',
                      description: 'Role description',
                      permissions: [],
                      color: 'text-gray-500',
                    })
                  }}
                >
                  <Plus size={14} className="mr-1" />
                  Add New Role
                </button>
              </div>
              {editingRole ? (
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-3">Edit Role</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Role Name
                      </label>
                      <input
                        type="text"
                        value={editingRole.name}
                        onChange={(e) =>
                          setEditingRole({
                            ...editingRole,
                            name: e.target.value,
                          })
                        }
                        className="w-full border rounded-md px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        value={editingRole.description}
                        onChange={(e) =>
                          setEditingRole({
                            ...editingRole,
                            description: e.target.value,
                          })
                        }
                        className="w-full border rounded-md px-3 py-2 text-sm"
                        rows={2}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Color
                      </label>
                      <select
                        value={editingRole.color}
                        onChange={(e) =>
                          setEditingRole({
                            ...editingRole,
                            color: e.target.value,
                          })
                        }
                        className="w-full border rounded-md px-3 py-2 text-sm"
                      >
                        <option value="text-red-500">Red</option>
                        <option value="text-blue-500">Blue</option>
                        <option value="text-green-500">Green</option>
                        <option value="text-orange-500">Orange</option>
                        <option value="text-purple-500">Purple</option>
                        <option value="text-gray-500">Gray</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Permissions
                      </label>
                      <div className="space-y-2 max-h-60 overflow-y-auto border rounded-md p-2">
                        {availablePermissions.map((permission, index) => (
                          <div key={index} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`permission-${index}`}
                              checked={editingRole.permissions.includes(
                                permission,
                              )}
                              onChange={() =>
                                handleTogglePermission(permission)
                              }
                              className="mr-2"
                            />
                            <label
                              htmlFor={`permission-${index}`}
                              className="text-sm"
                            >
                              {permission}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-3">
                    <button
                      onClick={() => setEditingRole(null)}
                      className="px-4 py-2 border rounded-md text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleEditRole}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
                    >
                      Save Role
                    </button>
                  </div>
                </div>
              ) : (
                <div className="border rounded-md p-4 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <Shield size={24} className="mx-auto mb-2" />
                    <p>Select a role to edit</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Configure Authentication Modal */}
      {isConfigureAuthModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Configure Authentication</h3>
              <button
                onClick={() => setIsConfigureAuthModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              {authSettings.map((setting) => (
                <div key={setting.id} className="p-3 border rounded-md">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      {setting.icon}
                      <span className="font-medium">{setting.name}</span>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input
                        type="checkbox"
                        id={`toggle-${setting.id}`}
                        className="sr-only"
                        checked={setting.enabled}
                        onChange={() => handleToggleAuthSetting(setting.id)}
                      />
                      <div
                        className={`w-10 h-5 ${setting.enabled ? 'bg-blue-500' : 'bg-gray-300'} rounded-full`}
                      ></div>
                      <div
                        className={`absolute w-3 h-3 bg-white rounded-full top-1 ${setting.enabled ? 'left-6' : 'left-1'} transition-all`}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{setting.description}</p>
                </div>
              ))}
              <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-md">
                <div className="flex items-start">
                  <AlertCircle
                    size={16}
                    className="mr-2 text-yellow-500 mt-0.5"
                  />
                  <div>
                    <p className="text-sm text-yellow-700 font-medium">
                      Important Security Notice
                    </p>
                    <p className="text-xs text-yellow-600 mt-1">
                      Enabling or disabling authentication settings may impact
                      user access. Make sure to communicate changes to your
                      team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsConfigureAuthModalOpen(false)}
                className="px-4 py-2 border rounded-md text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsConfigureAuthModalOpen(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

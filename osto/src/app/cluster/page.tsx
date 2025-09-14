'use client'

import React, { useState } from 'react'
import {
  ChevronDown,
  Plus,
  RefreshCw,
  Server,
  Database,
  Cpu,
  X,
  Check,

  Clock,
  Activity,

  Network,

} from 'lucide-react'

// Define types for our data
interface ClusterNode {
  id: string
  name: string
  status: 'Running' | 'Warning' | 'Error' | 'Maintenance'
  role: string
  ipAddress: string
  cpu: number
  memory: number
  uptime: string
  storage: number
  network: {
    inbound: string
    outbound: string
    connections: number
  }
  os: string
  version: string
  lastRestart: string
}
interface Cluster {
  id: string
  name: string
  environment: string
  nodes: ClusterNode[]
  status: 'Healthy' | 'Warning' | 'Error'
  activeNodes: number
  totalNodes: number
  uptime: string
  lastSync: string
}
export default function ClusterManagementPage() {
  // State for clusters
  const [clusters, setClusters] = useState<Cluster[]>([
    {
      id: 'cluster-1',
      name: 'Production Cluster',
      environment: 'Production',
      status: 'Healthy',
      activeNodes: 12,
      totalNodes: 12,
      uptime: '42d 7h 23m',
      lastSync: '2m ago',
      nodes: [
        {
          id: 'node-01',
          name: 'node-01',
          status: 'Running',
          role: 'Master',
          ipAddress: '10.0.1.5',
          cpu: 24,
          memory: 42,
          uptime: '42d 7h 23m',
          storage: 18,
          network: {
            inbound: '1.2 GB/s',
            outbound: '0.8 GB/s',
            connections: 432,
          },
          os: 'Ubuntu 22.04 LTS',
          version: '2.4.1',
          lastRestart: '42 days ago',
        },
        {
          id: 'node-02',
          name: 'node-02',
          status: 'Running',
          role: 'Worker',
          ipAddress: '10.0.1.6',
          cpu: 37,
          memory: 58,
          uptime: '41d 5h 12m',
          storage: 22,
          network: {
            inbound: '0.9 GB/s',
            outbound: '0.6 GB/s',
            connections: 356,
          },
          os: 'Ubuntu 22.04 LTS',
          version: '2.4.1',
          lastRestart: '41 days ago',
        },
        {
          id: 'node-03',
          name: 'node-03',
          status: 'Running',
          role: 'Worker',
          ipAddress: '10.0.1.7',
          cpu: 29,
          memory: 47,
          uptime: '40d 9h 45m',
          storage: 15,
          network: {
            inbound: '0.7 GB/s',
            outbound: '0.5 GB/s',
            connections: 287,
          },
          os: 'Ubuntu 22.04 LTS',
          version: '2.4.1',
          lastRestart: '40 days ago',
        },
      ],
    },
  ])
  // State for modals
  const [isAddClusterModalOpen, setIsAddClusterModalOpen] = useState(false)
  const [isNodeDetailsModalOpen, setIsNodeDetailsModalOpen] = useState(false)
  const [selectedNode, setSelectedNode] = useState<ClusterNode | null>(null)
  // Form state for adding a new cluster
  const [newCluster, setNewCluster] = useState({
    name: '',
    environment: 'Production',
    nodes: 3,
  })
  // Handle opening node details
  const handleNodeDetails = (node: ClusterNode) => {
    setSelectedNode(node)
    setIsNodeDetailsModalOpen(true)
  }
  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setNewCluster((prev) => ({
      ...prev,
      [name]: name === 'nodes' ? parseInt(value) : value,
    }))
  }
  // Handle adding a new cluster
  const handleAddCluster = () => {
    // Generate a new cluster with random values
    const newClusterId = `cluster-${clusters.length + 1}`
    const newNodes: ClusterNode[] = Array.from(
      {
        length: newCluster.nodes,
      },
      (_, i) => ({
        id: `${newClusterId}-node-${i + 1}`,
        name: `${newClusterId}-node-${i + 1}`,
        status: 'Running',
        role: i === 0 ? 'Master' : 'Worker',
        ipAddress: `10.0.${clusters.length + 1}.${i + 5}`,
        cpu: Math.floor(Math.random() * 40) + 10,
        memory: Math.floor(Math.random() * 40) + 20,
        uptime: '0d 0h 5m',
        storage: Math.floor(Math.random() * 20) + 10,
        network: {
          inbound: `${(Math.random() * 1).toFixed(1)} GB/s`,
          outbound: `${(Math.random() * 0.8).toFixed(1)} GB/s`,
          connections: Math.floor(Math.random() * 300) + 100,
        },
        os: 'Ubuntu 22.04 LTS',
        version: '2.4.1',
        lastRestart: 'Just now',
      }),
    )
    const createdCluster: Cluster = {
      id: newClusterId,
      name: newCluster.name,
      environment: newCluster.environment,
      status: 'Healthy',
      activeNodes: newCluster.nodes,
      totalNodes: newCluster.nodes,
      uptime: '0d 0h 5m',
      lastSync: 'Just now',
      nodes: newNodes,
    }
    setClusters((prev) => [...prev, createdCluster])
    setIsAddClusterModalOpen(false)
    // Reset form
    setNewCluster({
      name: '',
      environment: 'Production',
      nodes: 3,
    })
  }
  // Get the current active cluster (first one for now)
  const activeCluster = clusters[0]
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-medium">Cluster Management</h1>
          <div className="ml-4 flex items-center border rounded px-2 py-1">
            <span className="text-sm mr-2">
              {activeCluster ? activeCluster.environment : 'Production'}
            </span>
            <ChevronDown size={14} />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 border rounded px-3 py-1 text-sm">
            <RefreshCw size={14} />
            <span>Refresh</span>
          </button>
          <button
            className="bg-blue-500 text-white rounded px-3 py-1 text-sm flex items-center"
            onClick={() => setIsAddClusterModalOpen(true)}
          >
            <Plus size={14} className="mr-1" />
            <span>Add Cluster</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Cluster Status</h2>
            <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
              Healthy
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Active Nodes:</span>
              <span className="font-medium">12/12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Uptime:</span>
              <span className="font-medium">42d 7h 23m</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Last Sync:</span>
              <span className="font-medium">2m ago</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Resource Usage</h2>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">CPU</span>
                <span className="text-sm font-medium">32%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: '32%',
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Memory</span>
                <span className="text-sm font-medium">56%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: '56%',
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Storage</span>
                <span className="text-sm font-medium">18%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: '18%',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Network Traffic</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Inbound:</span>
              <span className="font-medium">2.3 GB/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Outbound:</span>
              <span className="font-medium">1.7 GB/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Active Connections:</span>
              <span className="font-medium">1,284</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md border overflow-hidden mb-6">
        <div className="p-4 border-b">
          <h2 className="font-medium">Cluster Nodes</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 text-sm">
            <tr>
              <th className="text-left p-3">Node ID</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Role</th>
              <th className="text-left p-3">IP Address</th>
              <th className="text-left p-3">CPU</th>
              <th className="text-left p-3">Memory</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {activeCluster?.nodes.map((node) => (
              <tr key={node.id} className="border-b">
                <td className="p-3">
                  <div className="flex items-center">
                    <Server size={16} className="mr-2 text-gray-500" />
                    <span>{node.name}</span>
                  </div>
                </td>
                <td className="p-3">
                  <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                    {node.status}
                  </span>
                </td>
                <td className="p-3">{node.role}</td>
                <td className="p-3">{node.ipAddress}</td>
                <td className="p-3">{node.cpu}%</td>
                <td className="p-3">{node.memory}%</td>
                <td className="p-3">
                  <button
                    className="text-blue-500 hover:underline text-sm"
                    onClick={() => handleNodeDetails(node)}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border">
          <h2 className="font-medium mb-4">Services</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 border rounded">
              <div className="flex items-center">
                <Database size={16} className="mr-2 text-gray-500" />
                <span>Database Service</span>
              </div>
              <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                Running
              </span>
            </div>
            <div className="flex items-center justify-between p-2 border rounded">
              <div className="flex items-center">
                <Cpu size={16} className="mr-2 text-gray-500" />
                <span>Processing Engine</span>
              </div>
              <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                Running
              </span>
            </div>
            <div className="flex items-center justify-between p-2 border rounded">
              <div className="flex items-center">
                <Server size={16} className="mr-2 text-gray-500" />
                <span>API Gateway</span>
              </div>
              <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                Running
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <h2 className="font-medium mb-4">Recent Events</h2>
          <div className="space-y-3">
            <div className="p-2 border-b">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Node node-04 joined the cluster
                </span>
                <span className="text-xs text-gray-500">10m ago</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Node successfully registered and started syncing
              </p>
            </div>
            <div className="p-2 border-b">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Database backup completed
                </span>
                <span className="text-xs text-gray-500">1h ago</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Daily backup completed successfully (450GB)
              </p>
            </div>
            <div className="p-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  System update applied
                </span>
                <span className="text-xs text-gray-500">3h ago</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Updated to version 2.4.1, no service interruption
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Add Cluster Modal */}
      {isAddClusterModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Add New Cluster</h3>
              <button
                onClick={() => setIsAddClusterModalOpen(false)}
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
                  Cluster Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newCluster.name}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-3 py-2 text-sm"
                  placeholder="Enter cluster name"
                />
              </div>
              <div>
                <label
                  htmlFor="environment"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Environment
                </label>
                <select
                  id="environment"
                  name="environment"
                  value={newCluster.environment}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-3 py-2 text-sm"
                >
                  <option value="Production">Production</option>
                  <option value="Staging">Staging</option>
                  <option value="Development">Development</option>
                  <option value="Testing">Testing</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="nodes"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Number of Nodes
                </label>
                <input
                  type="number"
                  id="nodes"
                  name="nodes"
                  min="1"
                  max="20"
                  value={newCluster.nodes}
                  onChange={handleInputChange}
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsAddClusterModalOpen(false)}
                className="px-4 py-2 border rounded-md text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCluster}
                disabled={!newCluster.name}
                className={`px-4 py-2 rounded-md text-sm text-white ${newCluster.name ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-300 cursor-not-allowed'}`}
              >
                Add Cluster
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Node Details Modal */}
      {isNodeDetailsModalOpen && selectedNode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Server size={20} className="mr-2 text-gray-500" />
                <h3 className="text-lg font-medium">
                  {selectedNode.name} Details
                </h3>
                <span className="ml-3 bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                  {selectedNode.status}
                </span>
              </div>
              <button
                onClick={() => setIsNodeDetailsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium mb-3 text-gray-700 flex items-center">
                  <Server size={16} className="mr-2" />
                  Node Information
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Node ID:</span>
                    <span className="font-medium">{selectedNode.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Role:</span>
                    <span className="font-medium">{selectedNode.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">IP Address:</span>
                    <span className="font-medium">
                      {selectedNode.ipAddress}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Operating System:</span>
                    <span className="font-medium">{selectedNode.os}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Version:</span>
                    <span className="font-medium">{selectedNode.version}</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium mb-3 text-gray-700 flex items-center">
                  <Activity size={16} className="mr-2" />
                  Performance
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">CPU Usage</span>
                      <span className="text-sm font-medium">
                        {selectedNode.cpu}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${selectedNode.cpu > 80 ? 'bg-red-500' : selectedNode.cpu > 60 ? 'bg-yellow-500' : 'bg-blue-500'}`}
                        style={{
                          width: `${selectedNode.cpu}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Memory Usage</span>
                      <span className="text-sm font-medium">
                        {selectedNode.memory}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${selectedNode.memory > 80 ? 'bg-red-500' : selectedNode.memory > 60 ? 'bg-yellow-500' : 'bg-blue-500'}`}
                        style={{
                          width: `${selectedNode.memory}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Storage Usage</span>
                      <span className="text-sm font-medium">
                        {selectedNode.storage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{
                          width: `${selectedNode.storage}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium mb-3 text-gray-700 flex items-center">
                  <Network size={16} className="mr-2" />
                  Network
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Inbound Traffic:</span>
                    <span className="font-medium">
                      {selectedNode.network.inbound}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Outbound Traffic:</span>
                    <span className="font-medium">
                      {selectedNode.network.outbound}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Connections:</span>
                    <span className="font-medium">
                      {selectedNode.network.connections}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium mb-3 text-gray-700 flex items-center">
                  <Clock size={16} className="mr-2" />
                  Status
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Uptime:</span>
                    <span className="font-medium">{selectedNode.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Restart:</span>
                    <span className="font-medium">
                      {selectedNode.lastRestart}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Health Check:</span>
                    <span className="font-medium text-green-600 flex items-center">
                      <Check size={14} className="mr-1" />
                      Passed
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsNodeDetailsModalOpen(false)}
                className="px-4 py-2 border rounded-md text-sm"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600">
                Manage Node
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

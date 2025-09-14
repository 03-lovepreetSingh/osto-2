'use client'

import React from 'react'

type SecuritySection =
  | 'general'
  | 'authentication'
  | 'alertPolicies'
  | 'monitoring'
  | 'threatDetection'
  | 'network'
  | 'data'
  | 'compliance'
  | 'advanced'
  | 'alerts'
interface SecurityTabsProps {
  activeTab: SecuritySection
  setActiveTab: (tab: SecuritySection) => void
}
export const SecurityTabs: React.FC<SecurityTabsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex border-b min-w-max">
      <button
        className={`px-4 py-2 text-sm whitespace-nowrap ${activeTab === 'general' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
        onClick={() => setActiveTab('general')}
      >
        General Settings
      </button>
      <button
        className={`px-4 py-2 text-sm whitespace-nowrap ${activeTab === 'authentication' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
        onClick={() => setActiveTab('authentication')}
      >
        Authentication
      </button>
      <button
        className={`px-4 py-2 text-sm whitespace-nowrap ${activeTab === 'network' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
        onClick={() => setActiveTab('network')}
      >
        Network Security
      </button>
      <button
        className={`px-4 py-2 text-sm whitespace-nowrap ${activeTab === 'data' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
        onClick={() => setActiveTab('data')}
      >
        Data Protection
      </button>
      <button
        className={`px-4 py-2 text-sm whitespace-nowrap ${activeTab === 'alerts' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
        onClick={() => setActiveTab('alerts')}
      >
        Alert Policies
      </button>
      <button
        className={`px-4 py-2 text-sm whitespace-nowrap ${activeTab === 'compliance' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
        onClick={() => setActiveTab('compliance')}
      >
        Compliance
      </button>
      <button
        className={`px-4 py-2 text-sm whitespace-nowrap ${activeTab === 'advanced' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
        onClick={() => setActiveTab('advanced')}
      >
        Advanced
      </button>
    </div>
  )
}

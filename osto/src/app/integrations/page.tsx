'use client'

import React, { useState } from 'react'
import { Info, ExternalLink, Check, X } from 'lucide-react'

type IntegrationStatus =
  | 'not connected'
  | 'connected'
  | 'integration'
  | 'configuring'
  | 'connecting'
  | 'disconnecting'

type StatusType = 'success' | 'warning' | 'info' | 'error'

interface Integration {
  id: string
  title: string
  icon: React.ReactNode
  status: IntegrationStatus
  statusType: StatusType
  description: string
  configLink?: string
  extraInfo?: string
}

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: 'azure-devops',
      title: 'Azure DevOps',
      icon: (
        <img
          src="https://uploadthingy.s3.us-west-1.amazonaws.com/9ecdzM4ArTurTv7WkAXvaY/orca-blog-ai-spm-image-2.webp"
          alt="Azure"
          className="w-5 h-5"
        />
      ),
      status: 'not connected',
      statusType: 'warning',
      description: 'Azure Devops is not connected',
      configLink: 'Navigate to configuration guide',
    },
    {
      id: 'jira-cloud',
      title: 'Jira Cloud',
      icon: (
        <div className="w-5 h-5 bg-blue-500 rounded-sm flex items-center justify-center text-white text-xs">
          J
        </div>
      ),
      status: 'connected',
      statusType: 'success',
      description: '2 templates available.',
      configLink: 'Navigate to configuration guide',
      extraInfo: 'For connecting new Jira resource: jira Marketplace',
    },
    {
      id: 'jira-server',
      title: 'Jira Server (on-prem)',
      icon: (
        <div className="w-5 h-5 bg-blue-500 rounded-sm flex items-center justify-center text-white text-xs">
          J
        </div>
      ),
      status: 'integration',
      statusType: 'info',
      description: 'Jira Server integration',
      configLink: 'Navigate to configuration guide',
    },
    {
      id: 'servicenow-itsm',
      title: 'ServiceNow ITSM',
      icon: (
        <div className="w-5 h-5 bg-green-100 rounded-sm flex items-center justify-center text-green-600 text-xs">
          S
        </div>
      ),
      status: 'connected',
      statusType: 'success',
      description: 'ServiceNow is connected',
      configLink: 'Navigate to configuration guide',
      extraInfo: '1 template available',
    },
    {
      id: 'servicenow-sir',
      title: 'ServiceNow SIR',
      icon: (
        <div className="w-5 h-5 bg-green-100 rounded-sm flex items-center justify-center text-green-600 text-xs">
          S
        </div>
      ),
      status: 'connected',
      statusType: 'success',
      description: 'ServiceNow is connected',
      configLink: 'Navigate to configuration guide',
      extraInfo: '1 template available',
    },
    {
      id: 'mssp',
      title: 'MSSP',
      icon: (
        <div className="w-5 h-5 bg-gray-100 rounded-sm flex items-center justify-center text-gray-600 text-xs">
          M
        </div>
      ),
      status: 'connected',
      statusType: 'success',
      description: 'Connect with MSSP',
    },
  ])
  const [notification, setNotification] = useState<{
    message: string
    type: 'success' | 'error' | 'info'
  } | null>(null)
  const handleConnect = (id: string) => {
    setIntegrations((prev) =>
      prev.map((integration) => {
        if (integration.id === id) {
          return {
            ...integration,
            status: 'connecting',
            statusType: 'info',
          }
        }
        return integration
      }),
    )
    // Simulate API call with timeout
    setTimeout(() => {
      setIntegrations((prev) =>
        prev.map((integration) => {
          if (integration.id === id) {
            return {
              ...integration,
              status: 'connected',
              statusType: 'success',
              description: integration.title + ' is connected',
            }
          }
          return integration
        }),
      )
      setNotification({
        message: `Successfully connected to ${integrations.find((i) => i.id === id)?.title}`,
        type: 'success',
      })
      // Auto-hide notification after 3 seconds
      setTimeout(() => setNotification(null), 3000)
    }, 1500)
  }
  const handleConfigure = (id: string) => {
    setIntegrations((prev) =>
      prev.map((integration) => {
        if (integration.id === id) {
          return {
            ...integration,
            status: 'configuring',
            statusType: 'info',
          }
        }
        return integration
      }),
    )
    // Simulate API call with timeout
    setTimeout(() => {
      setIntegrations((prev) =>
        prev.map((integration) => {
          if (integration.id === id) {
            return {
              ...integration,
              status: 'connected',
              statusType: 'success',
            }
          }
          return integration
        }),
      )
      setNotification({
        message: `Configuration updated for ${integrations.find((i) => i.id === id)?.title}`,
        type: 'success',
      })
      // Auto-hide notification after 3 seconds
      setTimeout(() => setNotification(null), 3000)
    }, 1500)
  }
  const handleDisconnect = (id: string) => {
    setIntegrations((prev) =>
      prev.map((integration) => {
        if (integration.id === id) {
          return {
            ...integration,
            status: 'disconnecting',
            statusType: 'warning',
          }
        }
        return integration
      }),
    )
    // Simulate API call with timeout
    setTimeout(() => {
      setIntegrations((prev) =>
        prev.map((integration) => {
          if (integration.id === id) {
            return {
              ...integration,
              status: 'not connected',
              statusType: 'warning',
              description: integration.title + ' is not connected',
            }
          }
          return integration
        }),
      )
      setNotification({
        message: `Disconnected from ${integrations.find((i) => i.id === id)?.title}`,
        type: 'info',
      })
      // Auto-hide notification after 3 seconds
      setTimeout(() => setNotification(null), 3000)
    }, 1500)
  }
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-medium mb-6">Integrations</h1>
      {/* Notification toast */}
      {notification && (
        <div
          className={`fixed top-6 right-6 p-4 rounded-md shadow-md flex items-center z-50 ${notification.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : notification.type === 'error' ? 'bg-red-100 text-red-800 border border-red-200' : 'bg-blue-100 text-blue-800 border border-blue-200'}`}
        >
          {notification.type === 'success' && (
            <Check size={18} className="mr-2 text-green-600" />
          )}
          {notification.type === 'error' && (
            <X size={18} className="mr-2 text-red-600" />
          )}
          {notification.type === 'info' && (
            <Info size={18} className="mr-2 text-blue-600" />
          )}
          <span>{notification.message}</span>
          <button
            className="ml-4 text-gray-500 hover:text-gray-700"
            onClick={() => setNotification(null)}
          >
            <X size={16} />
          </button>
        </div>
      )}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Ticketing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {integrations.slice(0, 3).map((integration) => (
            <IntegrationCard
              key={integration.id}
              {...integration}
              onConnect={() => handleConnect(integration.id)}
              onConfigure={() => handleConfigure(integration.id)}
              onDisconnect={() => handleDisconnect(integration.id)}
            />
          ))}
        </div>
      </div>
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {integrations.slice(3, 5).map((integration) => (
            <IntegrationCard
              key={integration.id}
              {...integration}
              onConnect={() => handleConnect(integration.id)}
              onConfigure={() => handleConfigure(integration.id)}
              onDisconnect={() => handleDisconnect(integration.id)}
            />
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">MSSP</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {integrations.slice(5).map((integration) => (
            <IntegrationCard
              key={integration.id}
              {...integration}
              onConnect={() => handleConnect(integration.id)}
              onConfigure={() => handleConfigure(integration.id)}
              onDisconnect={() => handleDisconnect(integration.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
interface IntegrationCardProps {
  id: string
  title: string
  icon: React.ReactNode
  status: IntegrationStatus
  statusType: StatusType
  description: string
  configLink?: string
  extraInfo?: string
  onConnect: () => void
  onConfigure: () => void
  onDisconnect: () => void
}
const IntegrationCard: React.FC<IntegrationCardProps> = ({
  title,
  icon,
  status,
  statusType,
  description,
  configLink,
  extraInfo,
  onConnect,
  onConfigure,
  onDisconnect,
}) => {
  const getButtonProps = () => {
    if (status === 'connecting') {
      return {
        text: 'Connecting...',
        variant: 'primary',
        disabled: true,
        onClick: () => {},
      }
    } else if (status === 'configuring') {
      return {
        text: 'Configuring...',
        variant: 'secondary',
        disabled: true,
        onClick: () => {},
      }
    } else if (status === 'disconnecting') {
      return {
        text: 'Disconnecting...',
        variant: 'danger',
        disabled: true,
        onClick: () => {},
      }
    } else if (status === 'connected') {
      return {
        text: 'Configure',
        variant: 'secondary',
        disabled: false,
        onClick: onConfigure,
      }
    } else if (status === 'not connected') {
      return {
        text: 'Connect',
        variant: 'primary',
        disabled: false,
        onClick: onConnect,
      }
    } else {
      // For 'integration' status
      return {
        text: 'Connect',
        variant: 'primary',
        disabled: false,
        onClick: onConnect,
      }
    }
  }
  // Special case for MSSP which uses Disconnect button
  const isDisconnectButton = title === 'MSSP' && status === 'connected'
  const buttonProps = isDisconnectButton
    ? {
        text: 'Disconnect',
        variant: 'danger',
        disabled: false,
        onClick: onDisconnect,
      }
    : getButtonProps()
  return (
    <div className="bg-white p-4 rounded-md border">
      <div className="flex items-center mb-4">
        {icon}
        <span className="ml-2 font-medium">{title}</span>
        {statusType === 'success' && (
          <span className="ml-auto text-xs bg-green-100 text-green-600 py-0.5 px-2 rounded">
            Connected
          </span>
        )}
        {statusType === 'warning' && status !== 'disconnecting' && (
          <span className="ml-auto text-xs bg-yellow-100 text-yellow-600 py-0.5 px-2 rounded">
            Not Connected
          </span>
        )}
        {statusType === 'info' &&
          status !== 'connecting' &&
          status !== 'configuring' && (
            <span className="ml-auto text-xs bg-blue-100 text-blue-600 py-0.5 px-2 rounded">
              Integration
            </span>
          )}
        {status === 'connecting' && (
          <span className="ml-auto text-xs bg-blue-100 text-blue-600 py-0.5 px-2 rounded flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-3 w-3 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Connecting
          </span>
        )}
        {status === 'configuring' && (
          <span className="ml-auto text-xs bg-blue-100 text-blue-600 py-0.5 px-2 rounded flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-3 w-3 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Configuring
          </span>
        )}
        {status === 'disconnecting' && (
          <span className="ml-auto text-xs bg-yellow-100 text-yellow-600 py-0.5 px-2 rounded flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-3 w-3 text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Disconnecting
          </span>
        )}
      </div>
      <div className="text-sm text-gray-600 mb-2">{description}</div>
      {configLink && (
        <div className="text-sm text-blue-500 mb-2 cursor-pointer">
          {configLink}
        </div>
      )}
      {extraInfo && (
        <div className="text-sm text-gray-600 mb-4">{extraInfo}</div>
      )}
      <div className="mt-4">
        <button
          className={`w-full py-1.5 px-3 rounded text-sm font-medium 
            ${buttonProps.variant === 'primary' ? 'bg-blue-500 text-white hover:bg-blue-600' : buttonProps.variant === 'secondary' ? 'bg-white border text-gray-700 hover:bg-gray-50' : 'bg-white border border-red-500 text-red-500 hover:bg-red-50'} 
            ${buttonProps.disabled ? 'opacity-60 cursor-not-allowed' : ''}
            transition-colors duration-200`}
          onClick={buttonProps.onClick}
          disabled={buttonProps.disabled}
        >
          {buttonProps.text}
        </button>
      </div>
    </div>
  )
}

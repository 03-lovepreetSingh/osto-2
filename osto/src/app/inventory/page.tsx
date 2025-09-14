'use client'

import React from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function InventoryPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-medium">Inventory</h1>
          <div className="ml-4 flex items-center border rounded px-2 py-1">
            <span className="text-sm mr-2">Osto Default</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/4 border-r pr-4">
          <h2 className="font-medium mb-4">Asset Categories</h2>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <span className="text-sm font-medium">All Asset Types</span>
              <ChevronDown size={14} className="ml-auto" />
            </div>
          </div>
          <div className="space-y-3">
            <AssetCategory color="green" icon="D" label="Data Storage" />
            <AssetCategory
              color="red"
              icon="E"
              label="Encryption and Secrets"
            />
            <AssetCategory color="purple" icon="N" label="Network" />
            <AssetCategory color="blue" icon="I" label="Identity and Access" />
            <AssetCategory color="blue" icon="K" label="Kubernetes" />
            <AssetCategory
              color="pink"
              icon="S"
              label="Security and Monitoring"
            />
            <AssetCategory
              color="amber"
              icon="M"
              label="Management and Governance"
            />
            <AssetCategory
              color="purple"
              icon="A"
              label="AI And Machine Learning"
              expanded={true}
            />
          </div>
          {/* Expanded AI and Machine Learning section */}
          <div className="ml-6 space-y-2 mt-2">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Artificial Intelligence</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">AWS Bedrock Customization</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Azure OpenAI Account</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Azure OpenAI Deployment</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Azure OpenAI Model</span>
            </div>
          </div>
          <div className="mt-4 space-y-3">
            <AssetCategory color="teal" icon="C" label="CI Source" />
            <AssetCategory color="gray" icon="O" label="Organization" />
          </div>
        </div>
        <div className="w-3/4 pl-6">
          <div className="bg-white border rounded-md p-4">
            <div className="flex items-center mb-4">
              <div className="bg-gray-100 text-xs px-2 py-1 rounded flex items-center">
                <span>seashell-openai-account</span>
              </div>
              <div className="ml-4 bg-orange-100 text-xs px-2 py-1 rounded flex items-center">
                <span className="text-orange-600">osto-45504</span>
                <span className="ml-1 text-gray-400">&times;</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-orange-500 text-white font-bold rounded px-2 py-1">
                5.7
              </div>
              <div className="ml-4">
                <h2 className="font-medium text-lg">
                  Azure OpenAI account local authentication method is enabled
                </h2>
                <p className="text-gray-500">Authentication</p>
              </div>
            </div>
            <div className="flex items-center mt-4 border-b pb-4">
              <div className="mr-6">
                <div className="text-sm text-gray-500">Asset</div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center text-xs mr-2">
                    S
                  </div>
                  <span>seashell-openai-account</span>
                </div>
              </div>
              <div className="mr-6">
                <div className="text-sm text-gray-500">Labels</div>
                <div className="bg-blue-100 text-xs px-2 py-0.5 rounded">
                  Source AI Security
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">MITRE</div>
                <div className="text-blue-500">
                  credential access: Steal Application Access Token (T1528)
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="font-medium mb-2">Remediation by</div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs mr-2">
                  A
                </div>
                <span>Azure OpenAI GPT4</span>
              </div>
              <div className="mt-4">
                <div className="font-medium mb-2">
                  Generate remediation steps for
                </div>
                <div className="grid grid-cols-7 gap-2">
                  <RemedyButton label="CLI" icon="C" active={true} />
                  <RemedyButton label="Console" icon="C" />
                  <RemedyButton label="ARM" icon="A" />
                  <RemedyButton label="Azure Policy" icon="A" />
                  <RemedyButton label="Terraform" icon="T" />
                  <RemedyButton label="Pulumi" icon="P" />
                  <RemedyButton label="OPA" icon="O" />
                </div>
              </div>
              <div className="mt-6 border-t pt-4">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center text-white text-xs mr-2">
                    C
                  </div>
                  <span className="font-medium">
                    Suggest remediation steps for this alert via CLI
                  </span>
                </div>
                <div className="bg-gray-50 p-4 rounded border">
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs mr-2">
                      <span className="text-purple-600">A</span>
                    </div>
                    <span className="text-sm">
                      To remediate the alert by disabling the local
                      authentication method for your Azure OpenAI account using
                      Azure CLI, follow these steps:
                    </span>
                  </div>
                  <div className="ml-8 mb-4">
                    <div className="font-medium text-sm mb-2">
                      1. Login to Azure CLI:
                    </div>
                    <div className="text-sm">
                      Ensure you are logged in to your Azure account.
                    </div>
                    <div className="bg-gray-100 p-2 rounded mt-1 flex items-center justify-between">
                      <code className="text-sm">az login</code>
                      <button className="text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <Link
                    href="/inventory/seashell-openai-account"
                    className="text-blue-500 mt-4 block"
                  >
                    View complete remediation steps
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
interface AssetCategoryProps {
  color: string
  icon: string
  label: string
  expanded?: boolean
}
const AssetCategory: React.FC<AssetCategoryProps> = ({
  color,
  icon,
  label,
  expanded = false,
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'green':
        return 'bg-green-500 text-white'
      case 'red':
        return 'bg-red-500 text-white'
      case 'blue':
        return 'bg-blue-500 text-white'
      case 'purple':
        return 'bg-purple-500 text-white'
      case 'pink':
        return 'bg-pink-500 text-white'
      case 'amber':
        return 'bg-amber-500 text-white'
      case 'teal':
        return 'bg-teal-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }
  return (
    <div className="flex items-center">
      <input type="checkbox" className="mr-2" />
      <div
        className={`w-6 h-6 ${getColorClass()} rounded flex items-center justify-center mr-2`}
      >
        {icon}
      </div>
      <span className="text-sm">{label}</span>
      {expanded ? (
        <ChevronDown size={14} className="ml-auto" />
      ) : (
        <ChevronRight size={14} className="ml-auto" />
      )}
    </div>
  )
}
interface RemedyButtonProps {
  label: string
  icon: string
  active?: boolean
}
const RemedyButton: React.FC<RemedyButtonProps> = ({
  label,
  icon,
  active = false,
}) => {
  return (
    <button
      className={`flex flex-col items-center justify-center p-2 rounded border ${active ? 'bg-blue-50 border-blue-200' : ''}`}
    >
      <div
        className={`w-6 h-6 rounded flex items-center justify-center mb-1 ${active ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
      >
        {icon}
      </div>
      <span className="text-xs">{label}</span>
    </button>
  )
}

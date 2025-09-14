'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, ChevronDown, Copy } from 'lucide-react'

export default function InventoryDetailPage() {
  const [activeTab, setActiveTab] = useState('remediation')
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white border rounded-md p-4">
        <div className="flex items-center mb-4">
          <div className="bg-gray-100 text-xs px-2 py-1 rounded flex items-center">
            <span>seashell-openai-account</span>
          </div>
          <div className="ml-4 bg-orange-100 text-xs px-2 py-1 rounded flex items-center">
            <span className="text-orange-600">osto-45504</span>
            <span className="ml-1 text-gray-400">&times;</span>
          </div>
          <div className="ml-auto flex items-center">
            <Link
              href="#"
              className="text-blue-500 flex items-center text-sm mr-4"
            >
              <span>Open In Legacy Page</span>
              <ExternalLink size={14} className="ml-1" />
            </Link>
            <div className="text-xs text-gray-500">
              Last seen: 2024 Aug 16, 01:35
            </div>
            <button className="ml-4 bg-orange-100 text-orange-600 rounded px-3 py-1 flex items-center">
              <span>Open</span>
              <ChevronDown size={14} className="ml-1" />
            </button>
            <button className="ml-2 bg-blue-500 text-white rounded px-3 py-1">
              Take Action
            </button>
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
        <div className="border-b">
          <div className="flex mt-4">
            <button
              className={`px-4 py-2 text-sm ${activeTab === 'overview' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-4 py-2 text-sm ${activeTab === 'score' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('score')}
            >
              Score Breakdown
            </button>
            <button
              className={`px-4 py-2 text-sm ${activeTab === 'remediation' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('remediation')}
            >
              Remediation
            </button>
          </div>
        </div>
        {activeTab === 'remediation' && (
          <div className="mt-4">
            <div className="font-medium mb-2">Remediation by</div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs mr-2">
                A
              </div>
              <span>Azure OpenAI GPT4</span>
              <span className="ml-auto bg-gray-100 text-xs px-2 py-0.5 rounded">
                Disclaimer
              </span>
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
            <div className="mt-6">
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
                    To remediate the alert by disabling the local authentication
                    method for your Azure OpenAI account using Azure CLI, follow
                    these steps:
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
                      <Copy size={14} />
                    </button>
                  </div>
                </div>
                <div className="ml-8 mb-4">
                  <div className="font-medium text-sm mb-2">
                    2. Set the appropriate subscription:
                  </div>
                  <div className="text-sm">
                    Use the Cloud Account ID to set the subscription context.
                  </div>
                  <div className="bg-gray-100 p-2 rounded mt-1 flex items-center justify-between">
                    <code className="text-sm">
                      az account set --subscription 2298f668b6db-146a0beea992
                    </code>
                    <button className="text-gray-500">
                      <Copy size={14} />
                    </button>
                  </div>
                </div>
                <div className="ml-8 mb-4">
                  <div className="font-medium text-sm mb-2">
                    3. Disable local authentication for the OpenAI account:
                  </div>
                  <div className="text-sm">
                    Use the az cognitiveservices account update command to
                    disable the local authentication method for the specified
                    OpenAI account.
                  </div>
                  <div className="bg-gray-100 p-2 rounded mt-1 flex items-center justify-between">
                    <code className="text-sm">
                      az cognitiveservices account update --name
                      seashell-openai-account --resource-group
                      RESOURCE_GROUP_NAME --custom-domain-suffix
                      CUSTOM_DOMAIN_SUFFIX --disable-local-auth true
                    </code>
                    <button className="text-gray-500">
                      <Copy size={14} />
                    </button>
                  </div>
                </div>
                <div className="ml-8 mb-4">
                  <div className="text-sm mb-2">
                    Replace RESOURCE_GROUP_NAME and CUSTOM_DOMAIN_SUFFIX with
                    the appropriate values for your environment. If you do not
                    have these values, you can find the resource group by
                    listing the cognitive services accounts and identifying the
                    correct one.
                  </div>
                  <div className="font-medium text-sm mb-2">
                    4. Verify the update:
                  </div>
                  <div className="text-sm">
                    Ensure that the local authentication method has been
                    disabled.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'score' && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-4xl font-bold">5.7</div>
                <div className="text-sm text-gray-500">Alert score</div>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-orange-600">!</span>
                </div>
                <span className="text-sm">Medium Risk</span>
              </div>
              <div className="text-blue-500 flex items-center text-sm">
                <span>Read in Documentation</span>
                <ExternalLink size={14} className="ml-1" />
              </div>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm font-medium">5 Risk Factors</div>
              <div className="flex items-center">
                <span className="text-sm mr-2">Sort by</span>
                <button className="border rounded px-2 py-1 text-sm flex items-center">
                  <span>Contribution</span>
                  <ChevronDown size={14} className="ml-1" />
                </button>
              </div>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50 text-sm">
                <tr>
                  <th className="text-left p-2">Factor</th>
                  <th className="text-left p-2">Value</th>
                  <th className="text-left p-2">Contribution</th>
                  <th className="text-left p-2">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">
                    <div className="flex items-center">
                      <span className="text-sm">Required Access</span>
                      <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center ml-1">
                        <span className="text-xs">?</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-2">Remote</td>
                  <td className="p-2">
                    <div className="flex">
                      <div className="w-4 h-4 bg-red-700"></div>
                      <div className="w-4 h-4 bg-red-700"></div>
                      <div className="w-4 h-4 bg-red-700"></div>
                      <div className="w-4 h-4 bg-red-700"></div>
                      <div className="w-4 h-4 bg-red-700"></div>
                    </div>
                  </td>
                  <td className="p-2">Probability</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">
                    <div className="flex items-center">
                      <span className="text-sm">MITRE Category</span>
                    </div>
                  </td>
                  <td className="p-2">Credential Access</td>
                  <td className="p-2">
                    <div className="flex">
                      <div className="w-4 h-4 bg-red-700"></div>
                      <div className="w-4 h-4 bg-red-700"></div>
                      <div className="w-4 h-4 bg-red-700"></div>
                      <div className="w-4 h-4 bg-red-700"></div>
                      <div className="w-4 h-4 bg-red-700"></div>
                    </div>
                  </td>
                  <td className="p-2">Impact</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">
                    <div className="flex items-center">
                      <span className="text-sm">External Exposure</span>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex items-center">
                      <span>Public Facing</span>
                      <ExternalLink size={14} className="ml-1" />
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex">
                      <div className="w-4 h-4 bg-red-700"></div>
                      <div className="w-4 h-4 bg-red-700"></div>
                      <div className="w-4 h-4 bg-red-700"></div>
                      <div className="w-4 h-4 bg-red-700"></div>
                      <div className="w-4 h-4 bg-gray-200"></div>
                    </div>
                  </td>
                  <td className="p-2">Probability</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">
                    <div className="flex items-center">
                      <span className="text-sm">Impact</span>
                      <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center ml-1">
                        <span className="text-xs">?</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-2">Asset Access</td>
                  <td className="p-2">
                    <div className="flex">
                      <div className="w-4 h-4 bg-orange-500"></div>
                      <div className="w-4 h-4 bg-orange-500"></div>
                      <div className="w-4 h-4 bg-orange-500"></div>
                      <div className="w-4 h-4 bg-gray-200"></div>
                      <div className="w-4 h-4 bg-gray-200"></div>
                    </div>
                  </td>
                  <td className="p-2">Impact</td>
                </tr>
                <tr>
                  <td className="p-2">
                    <div className="flex items-center">
                      <span className="text-sm">Exploitation Complexity</span>
                      <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center ml-1">
                        <span className="text-xs">?</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-2">Medium</td>
                  <td className="p-2">
                    <div className="flex">
                      <div className="w-4 h-4 bg-orange-500"></div>
                      <div className="w-4 h-4 bg-orange-500"></div>
                      <div className="w-4 h-4 bg-orange-500"></div>
                      <div className="w-4 h-4 bg-gray-200"></div>
                      <div className="w-4 h-4 bg-gray-200"></div>
                    </div>
                  </td>
                  <td className="p-2">Probability</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
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

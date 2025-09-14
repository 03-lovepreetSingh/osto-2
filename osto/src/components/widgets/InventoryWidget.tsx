'use client'

import React from 'react'
import { Info, MoreVertical } from 'lucide-react'

export const InventoryWidget = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <h2 className="font-medium">AI & Machine Learning Inventory</h2>
          <Info size={14} className="ml-2 text-gray-400" />
        </div>
        <div className="flex items-center">
          <button className="text-blue-600 text-sm mr-2">See All</button>
          <MoreVertical size={16} className="text-gray-400" />
        </div>
      </div>
      <div className="text-sm text-gray-500">By Cloud Provider</div>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <div className="w-20 text-sm text-blue-500">Azure</div>
          <div className="flex-1">
            <div className="relative h-4">
              <div
                className="absolute h-full bg-blue-500 rounded"
                style={{
                  width: '70%',
                }}
              ></div>
            </div>
          </div>
          <div className="w-10 text-right text-sm">7</div>
        </div>
        <div className="flex items-center mb-2">
          <div className="w-20 text-sm text-yellow-500">GCP</div>
          <div className="flex-1">
            <div className="relative h-4">
              <div
                className="absolute h-full bg-yellow-500 rounded"
                style={{
                  width: '20%',
                }}
              ></div>
            </div>
          </div>
          <div className="w-10 text-right text-sm">2</div>
        </div>
        <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
          <div>0</div>
          <div>3</div>
          <div>6</div>
          <div>9</div>
        </div>
        <div className="mt-4 text-xs">
          <div className="flex items-center mb-1">
            <span className="inline-block w-2 h-2 bg-blue-500 mr-2"></span>
            <span>Azure OpenAI Account</span>
          </div>
          <div className="flex items-center mb-1 ml-4">
            <span className="inline-block w-2 h-2 border border-blue-500 mr-2"></span>
            <span>Azure OpenAI Model</span>
          </div>
          <div className="flex items-center mb-1 ml-8">
            <span className="inline-block w-2 h-2 bg-blue-200 mr-2"></span>
            <span>Azure OpenAI Deployment</span>
          </div>
          <div className="flex items-center mb-1 ml-8">
            <span className="inline-block w-2 h-2 bg-blue-200 mr-2"></span>
            <span>AWS Bedrock Customization Job</span>
          </div>
          <div className="flex items-center mb-1 ml-4">
            <span className="inline-block w-2 h-2 border border-gray-500 mr-2"></span>
            <span>AWS Bedrock Custom Model</span>
          </div>
          <div className="flex items-center mb-1 ml-8">
            <span className="inline-block w-2 h-2 bg-yellow-200 mr-2"></span>
            <span>GCP Vertex AI Model</span>
          </div>
          <div className="flex items-center mb-1 ml-8">
            <span className="inline-block w-2 h-2 bg-yellow-200 mr-2"></span>
            <span>GCP Vertex AI Training Pipeline</span>
          </div>
        </div>
      </div>
    </div>
  )
}

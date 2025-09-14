'use client'

import React, { useState } from 'react'
import { ChevronDown,  X } from 'lucide-react'

interface BillingInvoiceModalProps {
  onClose: () => void
}

const BillingInvoiceModal = ({ onClose }: BillingInvoiceModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <div>
              <h2 className="text-2xl font-bold">Invoice</h2>
              <p className="text-gray-500">Osto Security</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="font-medium">Invoice To:</p>
              <p>Osto Default</p>
              <p>123 Security Ave</p>
              <p>San Francisco, CA 94105</p>
            </div>
            <div className="text-right">
              <p>
                <span className="font-medium">Invoice Number:</span>{' '}
                INV-2024-0092
              </p>
              <p>
                <span className="font-medium">Date:</span> September 15, 2024
              </p>
              <p>
                <span className="font-medium">Due Date:</span> October 1, 2024
              </p>
            </div>
          </div>
          <table className="w-full mb-6">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="p-2">Description</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Unit Price</th>
                <th className="p-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Enterprise Plus Subscription</td>
                <td className="p-2">1</td>
                <td className="p-2">$24,000.00</td>
                <td className="p-2 text-right">$24,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Additional User Licenses</td>
                <td className="p-2">5</td>
                <td className="p-2">$1,200.00</td>
                <td className="p-2 text-right">$6,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Premium Support</td>
                <td className="p-2">1</td>
                <td className="p-2">$5,000.00</td>
                <td className="p-2 text-right">$5,000.00</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end mb-6">
            <div className="w-64">
              <div className="flex justify-between py-1">
                <span>Subtotal:</span>
                <span>$35,000.00</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Tax (8%):</span>
                <span>$2,800.00</span>
              </div>
              <div className="flex justify-between py-1 font-bold border-t mt-2 pt-2">
                <span>Total:</span>
                <span>$37,800.00</span>
              </div>
            </div>
          </div>
          <div className="border-t pt-4">
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Payment Terms:</span> Net 30
            </p>
            <p className="text-sm text-gray-600">
              Please include the invoice number in your payment reference.
            </p>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function AccountCenterPage() {
  const [showInvoice, setShowInvoice] = useState(false)
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-medium">Account Center</h1>
          <div className="ml-4 flex items-center border rounded px-2 py-1">
            <span className="text-sm mr-2">Osto Default</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-md border">
          <h2 className="text-lg font-medium mb-4">Account Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Account ID:</span>
              <span className="font-medium">ORD-29384756</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Account Type:</span>
              <span className="font-medium">Enterprise</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-sm">
                Active
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Renewal Date:</span>
              <span className="font-medium">Oct 15, 2024</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <h2 className="text-lg font-medium mb-4">Usage Statistics</h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Assets Scanned</span>
                <span className="text-sm font-medium">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: '78%',
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">API Calls</span>
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
                <span className="text-sm">Storage</span>
                <span className="text-sm font-medium">23%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: '23%',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <h2 className="text-lg font-medium mb-4">Billing Information</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Plan:</span>
              <span className="font-medium">Enterprise Plus</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Billing Cycle:</span>
              <span className="font-medium">Annual</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Next Invoice:</span>
              <span className="font-medium">Oct 1, 2024</span>
            </div>
            <div className="mt-4">
              <button
                className="w-full bg-blue-500 text-white rounded px-3 py-1.5 text-sm hover:bg-blue-600"
                onClick={() => setShowInvoice(true)}
              >
                View Billing Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-white p-4 rounded-md border">
        <h2 className="text-lg font-medium mb-4">Account Activity</h2>
        <table className="w-full">
          <thead className="bg-gray-50 text-sm">
            <tr>
              <th className="text-left p-2">Date</th>
              <th className="text-left p-2">User</th>
              <th className="text-left p-2">Action</th>
              <th className="text-left p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">2024-08-16 14:23</td>
              <td className="p-2">admin@ostodemo.com</td>
              <td className="p-2">Updated security settings</td>
              <td className="p-2">
                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                  Completed
                </span>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2">2024-08-15 09:17</td>
              <td className="p-2">user1@ostodemo.com</td>
              <td className="p-2">Added API integration</td>
              <td className="p-2">
                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                  Completed
                </span>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2">2024-08-14 16:05</td>
              <td className="p-2">admin@ostodemo.com</td>
              <td className="p-2">Changed account settings</td>
              <td className="p-2">
                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td className="p-2">2024-08-13 11:32</td>
              <td className="p-2">user2@ostodemo.com</td>
              <td className="p-2">Added user</td>
              <td className="p-2">
                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                  Completed
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {showInvoice && (
        <BillingInvoiceModal onClose={() => setShowInvoice(false)} />
      )}
    </div>
  )
}

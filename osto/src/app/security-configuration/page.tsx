'use client'

import React, { useState } from 'react'
import {
  Shield,
  Lock,
  Bell,
  Eye,
  AlertTriangle,
  RefreshCw,
  Save,
  Database,
  Plus,
  FileCheck,
  Globe,
  Fingerprint,
  BarChart,
  FileText,
  UserCheck,
  Wifi,
  Router,
  Lock as LockIcon,
  HardDrive,
  FileDigit,
  GitBranch,
  Terminal,
  Award,
  Sliders,
  Upload,
  Download,
  Key,
  X,
} from 'lucide-react'

// Temporary placeholder components until UI components are created
const Button = ({ children, variant, size, className, ...props }: any) => {
  const baseClasses = "px-3 py-1 rounded inline-flex items-center justify-center"
  const variantClasses = {
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-500 hover:bg-gray-100",
    default: "bg-blue-500 text-white hover:bg-blue-600"
  }
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    default: "px-3 py-1"
  }
  
  const variantClass = variantClasses[variant as keyof typeof variantClasses] || variantClasses.default
  const sizeClass = sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.default
  
  return (
    <button className={`${baseClasses} ${variantClass} ${sizeClass} ${className || ''}`} {...props}>
      {children}
    </button>
  )
}

const Card = ({ children, className, ...props }: any) => (
  <div className={`bg-white border rounded-md ${className}`} {...props}>
    {children}
  </div>
)

const CardHeader = ({ children, className, ...props }: any) => (
  <div className={`p-4 border-b ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className, ...props }: any) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
)

const SecurityTabs = ({ activeTab, setActiveTab }: any) => (
  <div className="flex space-x-4 border-b">
    {['general', 'authentication', 'network', 'data', 'compliance', 'advanced', 'alerts'].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-4 py-2 text-sm ${activeTab === tab ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>
)

// Define the possible security sections
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

export default function SecurityConfigurationPage() {
  // State to track which section is active
  const [activeTab, setActiveTab] = useState<SecuritySection>('general')
  return (
    <div className="container mx-auto p-4 lg:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-medium">Security Configuration</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center">
            <RefreshCw size={14} className="mr-1" />
            <span>Refresh</span>
          </Button>
          <Button size="sm" className="flex items-center">
            <Save size={14} className="mr-1" />
            <span>Save Changes</span>
          </Button>
        </div>
      </div>
      <div className="mb-6 overflow-x-auto">
        <SecurityTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {activeTab === 'general' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Shield size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Security Posture</h2>
              </div>
              <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-xs">
                Medium Risk
              </span>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Overall Security</span>
                    <span className="text-sm font-medium">67%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{
                        width: '67%',
                      }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Authentication</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{
                        width: '85%',
                      }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Network Security</span>
                    <span className="text-sm font-medium">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{
                        width: '42%',
                      }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Data Protection</span>
                    <span className="text-sm font-medium">73%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{
                        width: '73%',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full">
                  View Detailed Report
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Bell size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Security Notifications</h2>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Critical Alerts</div>
                    <div className="text-xs text-gray-500">
                      Email, SMS, Slack notifications
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="critical-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">High Priority Alerts</div>
                    <div className="text-xs text-gray-500">
                      Email, Slack notifications
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="high-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Medium Priority Alerts</div>
                    <div className="text-xs text-gray-500">
                      Email notifications
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="medium-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Low Priority Alerts</div>
                    <div className="text-xs text-gray-500">
                      Dashboard notifications only
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="low-toggle"
                      className="sr-only"
                    />
                    <div className="w-10 h-5 bg-gray-300 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Eye size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Audit Logging</h2>
              </div>
              <Button variant="outline" size="sm">
                View Logs
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">User Activity Logging</div>
                    <div className="text-xs text-gray-500">
                      Track all user actions
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="user-activity-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">System Events</div>
                    <div className="text-xs text-gray-500">
                      Log system-level events
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="system-events-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Security Events</div>
                    <div className="text-xs text-gray-500">
                      Log security-related events
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="security-events-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Log Retention Period</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>30 days</option>
                    <option>60 days</option>
                    <option>90 days</option>
                    <option selected>1 year</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <AlertTriangle size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">
                  Security Recommendations
                </h2>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-yellow-50 border border-yellow-100 rounded">
                  <div className="flex items-center mb-1">
                    <AlertTriangle size={16} className="mr-2 text-yellow-500" />
                    <span className="font-medium">Network Security</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Enable network traffic encryption for all internal services.
                  </p>
                  <Button variant="outline" size="sm">
                    Apply Fix
                  </Button>
                </div>
                <div className="p-3 bg-red-50 border border-red-100 rounded">
                  <div className="flex items-center mb-1">
                    <AlertTriangle size={16} className="mr-2 text-red-500" />
                    <span className="font-medium">API Security</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Update API rate limiting policy to prevent brute force
                    attacks.
                  </p>
                  <Button variant="outline" size="sm">
                    Apply Fix
                  </Button>
                </div>
                <div className="p-3 bg-yellow-50 border border-yellow-100 rounded">
                  <div className="flex items-center mb-1">
                    <AlertTriangle size={16} className="mr-2 text-yellow-500" />
                    <span className="font-medium">Data Protection</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Enable automatic data backup for all critical databases.
                  </p>
                  <Button variant="outline" size="sm">
                    Apply Fix
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      {activeTab === 'authentication' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Lock size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Authentication Methods</h2>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Single Sign-On (SSO)</div>
                    <div className="text-xs text-gray-500">
                      SAML, OAuth, or OIDC
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="sso-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">
                      Multi-Factor Authentication
                    </div>
                    <div className="text-xs text-gray-500">
                      Required for all users
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="mfa-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">LDAP Integration</div>
                    <div className="text-xs text-gray-500">
                      Connect to directory services
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="ldap-toggle"
                      className="sr-only"
                    />
                    <div className="w-10 h-5 bg-gray-300 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Local Authentication</div>
                    <div className="text-xs text-gray-500">
                      Username and password
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="local-auth-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Key size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Password Policies</h2>
              </div>
              <Button variant="outline" size="sm">
                Edit Policies
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Minimum Password Length</span>
                  <span className="text-sm font-medium">12 characters</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Require Special Characters</span>
                  <span className="text-green-500">
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Require Numbers</span>
                  <span className="text-green-500">
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Password Expiration</span>
                  <span className="text-sm font-medium">90 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Password History</span>
                  <span className="text-sm font-medium">Last 5 passwords</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Account Lockout Threshold</span>
                  <span className="text-sm font-medium">5 attempts</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <UserCheck size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Session Management</h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Session Timeout</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>15 minutes</option>
                    <option>30 minutes</option>
                    <option selected>1 hour</option>
                    <option>4 hours</option>
                    <option>8 hours</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Concurrent Sessions</div>
                    <div className="text-xs text-gray-500">
                      Allow multiple active sessions
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="concurrent-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Force Re-authentication</div>
                    <div className="text-xs text-gray-500">
                      For sensitive actions
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="reauth-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Remember Me Functionality</div>
                    <div className="text-xs text-gray-500">
                      Extended session duration
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="remember-toggle"
                      className="sr-only"
                    />
                    <div className="w-10 h-5 bg-gray-300 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Fingerprint size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">MFA Configuration</h2>
              </div>
              <Button variant="outline" size="sm">
                Setup MFA
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <input
                    type="radio"
                    id="mfa-all"
                    name="mfa-policy"
                    className="h-4 w-4 text-blue-600"
                    checked
                  />
                  <label htmlFor="mfa-all" className="text-sm">
                    Required for all users
                  </label>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <input
                    type="radio"
                    id="mfa-admin"
                    name="mfa-policy"
                    className="h-4 w-4 text-blue-600"
                  />
                  <label htmlFor="mfa-admin" className="text-sm">
                    Required for administrators only
                  </label>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <input
                    type="radio"
                    id="mfa-optional"
                    name="mfa-policy"
                    className="h-4 w-4 text-blue-600"
                  />
                  <label htmlFor="mfa-optional" className="text-sm">
                    Optional for all users
                  </label>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <input
                    type="radio"
                    id="mfa-disabled"
                    name="mfa-policy"
                    className="h-4 w-4 text-blue-600"
                  />
                  <label htmlFor="mfa-disabled" className="text-sm">
                    Disabled
                  </label>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-medium mb-2">
                    Allowed MFA Methods
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="mfa-app"
                        className="h-4 w-4 text-blue-600 mr-2"
                        checked
                      />
                      <label htmlFor="mfa-app" className="text-sm">
                        Authenticator App
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="mfa-sms"
                        className="h-4 w-4 text-blue-600 mr-2"
                        checked
                      />
                      <label htmlFor="mfa-sms" className="text-sm">
                        SMS
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="mfa-email"
                        className="h-4 w-4 text-blue-600 mr-2"
                        checked
                      />
                      <label htmlFor="mfa-email" className="text-sm">
                        Email
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="mfa-hardware"
                        className="h-4 w-4 text-blue-600 mr-2"
                        checked
                      />
                      <label htmlFor="mfa-hardware" className="text-sm">
                        Hardware Security Key
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      {activeTab === 'network' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Wifi size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Network Access Control</h2>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">IP Whitelisting</div>
                    <div className="text-xs text-gray-500">
                      Restrict access to specific IP ranges
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="ip-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="p-3 border rounded">
                  <div className="text-sm font-medium mb-2">
                    Allowed IP Ranges
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">192.168.1.0/24</span>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <X size={14} />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">10.0.0.0/8</span>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <X size={14} />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">172.16.0.0/12</span>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <X size={14} />
                      </Button>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    <input
                      type="text"
                      placeholder="Add new IP range"
                      className="border rounded px-2 py-1 text-sm flex-1"
                    />
                    <Button size="sm" className="ml-2">
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Globe size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">API Security</h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Rate Limiting</div>
                    <div className="text-xs text-gray-500">
                      Prevent API abuse
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="rate-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Max Requests</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>100 per minute</option>
                    <option selected>1000 per minute</option>
                    <option>5000 per minute</option>
                    <option>10000 per minute</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">API Key Authentication</div>
                    <div className="text-xs text-gray-500">
                      Require API keys for access
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="api-key-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">JWT Authentication</div>
                    <div className="text-xs text-gray-500">
                      JSON Web Token based auth
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="jwt-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">JWT Token Expiration</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>15 minutes</option>
                    <option selected>1 hour</option>
                    <option>24 hours</option>
                    <option>7 days</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Router size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Firewall Configuration</h2>
              </div>
              <Button variant="outline" size="sm">
                Advanced
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Web Application Firewall</div>
                    <div className="text-xs text-gray-500">
                      Protect against common web attacks
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="waf-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">WAF Mode</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>Detection Only</option>
                    <option selected>Prevention</option>
                    <option>Advanced Prevention</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">DDoS Protection</div>
                    <div className="text-xs text-gray-500">
                      Mitigate denial of service attacks
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="ddos-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Bot Protection</div>
                    <div className="text-xs text-gray-500">
                      Block malicious bots
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="bot-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <LockIcon size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">SSL/TLS Configuration</h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">HTTPS Only</div>
                    <div className="text-xs text-gray-500">
                      Force all connections over HTTPS
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="https-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Minimum TLS Version</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>TLS 1.0</option>
                    <option>TLS 1.1</option>
                    <option selected>TLS 1.2</option>
                    <option>TLS 1.3</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">HSTS</div>
                    <div className="text-xs text-gray-500">
                      HTTP Strict Transport Security
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="hsts-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">SSL Certificate Auto-Renewal</span>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="ssl-renewal-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      {activeTab === 'data' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Database size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Data Encryption</h2>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Encryption at Rest</div>
                    <div className="text-xs text-gray-500">
                      Encrypt stored data
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="rest-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Encryption in Transit</div>
                    <div className="text-xs text-gray-500">
                      Encrypt data during transfer
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="transit-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Encryption Algorithm</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>AES-128</option>
                    <option selected>AES-256</option>
                    <option>ChaCha20</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Key Rotation</div>
                    <div className="text-xs text-gray-500">
                      Regularly rotate encryption keys
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="key-rotation-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Key Rotation Period</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>30 days</option>
                    <option selected>90 days</option>
                    <option>180 days</option>
                    <option>365 days</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <HardDrive size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Data Backup & Recovery</h2>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Automated Backups</div>
                    <div className="text-xs text-gray-500">
                      Schedule regular backups
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="backup-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Backup Frequency</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>Hourly</option>
                    <option selected>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Backup Retention</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>7 days</option>
                    <option>14 days</option>
                    <option selected>30 days</option>
                    <option>90 days</option>
                    <option>1 year</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Encrypted Backups</div>
                    <div className="text-xs text-gray-500">
                      Encrypt backup data
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="encrypted-backup-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Offsite Backups</div>
                    <div className="text-xs text-gray-500">
                      Store backups in multiple locations
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="offsite-backup-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <FileDigit size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Data Classification</h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">
                      Automatic Data Classification
                    </div>
                    <div className="text-xs text-gray-500">
                      Identify and label sensitive data
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="auto-classification-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="p-3 border rounded">
                  <div className="text-sm font-medium mb-2">
                    Data Classification Levels
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Public</span>
                      <div className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                        Low Protection
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Internal</span>
                      <div className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs">
                        Medium Protection
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Confidential</span>
                      <div className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-xs">
                        High Protection
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Restricted</span>
                      <div className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs">
                        Maximum Protection
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Upload size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Data Loss Prevention</h2>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">DLP Policies</div>
                    <div className="text-xs text-gray-500">
                      Prevent data exfiltration
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="dlp-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">File Transfer Monitoring</div>
                    <div className="text-xs text-gray-500">
                      Monitor file uploads/downloads
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="file-transfer-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Content Scanning</div>
                    <div className="text-xs text-gray-500">
                      Scan content for sensitive data
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="content-scan-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Endpoint Protection</div>
                    <div className="text-xs text-gray-500">
                      Secure data on user devices
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="endpoint-toggle"
                      className="sr-only"
                    />
                    <div className="w-10 h-5 bg-gray-300 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      {activeTab === 'compliance' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <FileCheck size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Compliance Standards</h2>
              </div>
              <Button variant="outline" size="sm">
                View Reports
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="gdpr"
                      className="h-4 w-4 text-blue-600 mr-2"
                      checked
                    />
                    <div>
                      <label htmlFor="gdpr" className="text-sm font-medium">
                        GDPR
                      </label>
                      <div className="text-xs text-gray-500">
                        EU General Data Protection Regulation
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                    Compliant
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hipaa"
                      className="h-4 w-4 text-blue-600 mr-2"
                      checked
                    />
                    <div>
                      <label htmlFor="hipaa" className="text-sm font-medium">
                        HIPAA
                      </label>
                      <div className="text-xs text-gray-500">
                        Health Insurance Portability and Accountability Act
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-xs">
                    Partial
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="pci"
                      className="h-4 w-4 text-blue-600 mr-2"
                      checked
                    />
                    <div>
                      <label htmlFor="pci" className="text-sm font-medium">
                        PCI DSS
                      </label>
                      <div className="text-xs text-gray-500">
                        Payment Card Industry Data Security Standard
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                    Compliant
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="soc2"
                      className="h-4 w-4 text-blue-600 mr-2"
                      checked
                    />
                    <div>
                      <label htmlFor="soc2" className="text-sm font-medium">
                        SOC 2
                      </label>
                      <div className="text-xs text-gray-500">
                        Service Organization Control 2
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                    Compliant
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="iso"
                      className="h-4 w-4 text-blue-600 mr-2"
                    />
                    <div>
                      <label htmlFor="iso" className="text-sm font-medium">
                        ISO 27001
                      </label>
                      <div className="text-xs text-gray-500">
                        Information Security Management
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
                    Not Configured
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <BarChart size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Compliance Reports</h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">
                      Automated Compliance Reports
                    </div>
                    <div className="text-xs text-gray-500">
                      Generate regular compliance reports
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="compliance-reports-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Report Frequency</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>Weekly</option>
                    <option selected>Monthly</option>
                    <option>Quarterly</option>
                    <option>Annually</option>
                  </select>
                </div>
                <div className="p-3 border rounded">
                  <div className="text-sm font-medium mb-2">Recent Reports</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">GDPR Compliance Report</span>
                      <button className="text-blue-500 text-xs">
                        Download
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">PCI DSS Audit Report</span>
                      <button className="text-blue-500 text-xs">
                        Download
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        Security Controls Assessment
                      </span>
                      <button className="text-blue-500 text-xs">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <FileText size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Data Retention Policies</h2>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Automated Data Retention</div>
                    <div className="text-xs text-gray-500">
                      Automatically enforce retention policies
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="retention-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="p-3 border rounded">
                  <div className="text-sm font-medium mb-2">
                    Data Categories
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">User Data</span>
                      <select className="border rounded px-2 py-1 text-xs">
                        <option>1 year</option>
                        <option selected>2 years</option>
                        <option>5 years</option>
                        <option>7 years</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Transaction Data</span>
                      <select className="border rounded px-2 py-1 text-xs">
                        <option>1 year</option>
                        <option>3 years</option>
                        <option selected>5 years</option>
                        <option>7 years</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Log Data</span>
                      <select className="border rounded px-2 py-1 text-xs">
                        <option>30 days</option>
                        <option>90 days</option>
                        <option selected>1 year</option>
                        <option>2 years</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Backup Data</span>
                      <select className="border rounded px-2 py-1 text-xs">
                        <option>30 days</option>
                        <option>90 days</option>
                        <option selected>1 year</option>
                        <option>3 years</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Award size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Privacy Controls</h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Data Subject Requests</div>
                    <div className="text-xs text-gray-500">
                      Handle GDPR/CCPA requests
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="dsr-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Privacy Policy Management</div>
                    <div className="text-xs text-gray-500">
                      Manage and publish privacy policies
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="privacy-policy-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Consent Management</div>
                    <div className="text-xs text-gray-500">
                      Track user consent for data processing
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="consent-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Cookie Compliance</div>
                    <div className="text-xs text-gray-500">
                      Manage cookie consent and banners
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="cookie-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      {activeTab === 'advanced' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <GitBranch size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Security Integrations</h2>
              </div>
              <Button variant="outline" size="sm">
                Add Integration
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">SIEM Integration</div>
                    <div className="text-xs text-gray-500">
                      Security Information and Event Management
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="siem-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">SOAR Integration</div>
                    <div className="text-xs text-gray-500">
                      Security Orchestration, Automation and Response
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="soar-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Threat Intelligence Feeds</div>
                    <div className="text-xs text-gray-500">
                      External threat data sources
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="threat-intel-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Vulnerability Scanner</div>
                    <div className="text-xs text-gray-500">
                      Automated vulnerability scanning
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="vuln-scanner-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Terminal size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Advanced Configurations</h2>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="text-red-500 border-red-500"
              >
                Reset
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Security Headers</div>
                    <div className="text-xs text-gray-500">
                      Configure HTTP security headers
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="sec-headers-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">CSP Configuration</div>
                    <div className="text-xs text-gray-500">
                      Content Security Policy settings
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="csp-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">CORS Settings</div>
                    <div className="text-xs text-gray-500">
                      Cross-Origin Resource Sharing
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="cors-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Debug Mode</div>
                    <div className="text-xs text-gray-500">
                      Enable advanced debugging
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="debug-toggle"
                      className="sr-only"
                    />
                    <div className="w-10 h-5 bg-gray-300 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Download size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Security Import/Export</h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-2">
                    Export Security Configuration
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    Export all security settings as a JSON file
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Export Configuration
                  </Button>
                </div>
                <div>
                  <div className="text-sm font-medium mb-2">
                    Import Security Configuration
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    Import security settings from a JSON file
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Import Configuration
                  </Button>
                </div>
                <div>
                  <div className="text-sm font-medium mb-2">
                    Security Templates
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    Apply predefined security configurations
                  </div>
                  <select className="border rounded px-2 py-1 text-sm w-full">
                    <option>Select a template</option>
                    <option>HIPAA Compliance Template</option>
                    <option>PCI DSS Compliance Template</option>
                    <option>GDPR Compliance Template</option>
                    <option>High Security Template</option>
                  </select>
                  <Button size="sm" className="w-full mt-2">
                    Apply Template
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Sliders size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Security Hardening</h2>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Security Level</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>Standard</option>
                    <option selected>Enhanced</option>
                    <option>Maximum</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Strict Transport Security</div>
                    <div className="text-xs text-gray-500">
                      Force HTTPS connections
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="hsts-adv-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">XSS Protection</div>
                    <div className="text-xs text-gray-500">
                      Cross-site scripting protection
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="xss-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">SQL Injection Protection</div>
                    <div className="text-xs text-gray-500">
                      Enhanced database query protection
                    </div>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="sql-toggle"
                      className="sr-only"
                      checked
                    />
                    <div className="w-10 h-5 bg-blue-500 rounded-full"></div>
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 transition"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      {activeTab === 'alerts' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <Bell size={18} className="mr-2 text-gray-500" />
                <h2 className="text-lg font-medium">Alert Policies</h2>
              </div>
              <Button size="sm" className="flex items-center">
                <Plus size={14} className="mr-1" />
                <span>Add Policy</span>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">
                      Critical Vulnerability Alert
                    </div>
                    <div className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs">
                      Critical
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">
                    Alerts when critical vulnerabilities are detected in any
                    system.
                  </p>
                  <div className="flex justify-between text-sm">
                    <span>Notification channels: Email, SMS, Slack</span>
                    <button className="text-blue-500">Edit</button>
                  </div>
                </div>
                {/* More alert policies would go here */}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

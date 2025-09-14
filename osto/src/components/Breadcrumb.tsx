'use client'

import React, { Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

export const Breadcrumb = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter((segment) => segment)
  const getBreadcrumbName = (segment: string) => {
    switch (segment) {
      case 'alerts':
        return 'Alerts'
      case 'inventory':
        return 'Inventory'
      case 'integrations':
        return 'Integrations'
      default:
        return segment
    }
  }
  if (pathname === '/') return null
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center text-sm">
          <Link
            href="/"
            className="text-gray-500 hover:text-blue-600 flex items-center"
          >
            <Home size={14} />
            <span className="ml-1">Home</span>
          </Link>
          {pathSegments.map((segment, index) => {
            const url = `/${pathSegments.slice(0, index + 1).join('/')}`
            const isLast = index === pathSegments.length - 1
            return (
              <Fragment key={segment}>
                <ChevronRight size={14} className="mx-2 text-gray-400" />
                {isLast ? (
                  <span className="text-gray-800 font-medium">
                    {getBreadcrumbName(segment)}
                  </span>
                ) : (
                  <Link href={url} className="text-gray-500 hover:text-blue-600">
                    {getBreadcrumbName(segment)}
                  </Link>
                )}
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

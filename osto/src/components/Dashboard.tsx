'use client'

import React from 'react'
import { DashboardHeader } from './DashboardHeader'
import { AlertsWidget } from './widgets/AlertsWidget'
import { TopRisksWidget } from './widgets/TopRisksWidget'
import { InventoryWidget } from './widgets/InventoryWidget'
import { RiskiestAssetsWidget } from './widgets/RiskiestAssetsWidget'
import { RiskiestComputesWidget } from './widgets/RiskiestComputesWidget'

export const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <DashboardHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <AlertsWidget />
        <TopRisksWidget />
      </div>
      <div className="mt-4">
        <InventoryWidget />
      </div>
      <div className="mt-4">
        <RiskiestAssetsWidget />
      </div>
      <div className="mt-4">
        <RiskiestComputesWidget />
      </div>
    </div>
  )
}

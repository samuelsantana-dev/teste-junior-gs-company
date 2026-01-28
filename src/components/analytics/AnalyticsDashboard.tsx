"use client"

import { useEffect, useState } from "react"
import { Analytics } from "@/types"
import { getAnalytics } from "@/services/analytics.service"
import { Loading } from "@/components/ui/Loading"
import { MetricsGrid } from "./MetricsGrid"
import { ChartsSection } from "./ChartsSection"

export function AnalyticsDashboard() {
  const [data, setData] = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function fetchAnalytics() {
    try {
      setLoading(true)
      setError(null)
      const response = await getAnalytics()
      setData(response)
    } catch {
      setError("Erro ao carregar métricas")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnalytics()
  }, [])

  if (loading) return <Loading text="Carregando métricas..." />
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>
  if (!data) return null

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Analytics do Atendimento</h1>
        <p className="text-gray-600 text-sm mt-1">Visão geral das conversas e mensagens do dia</p>
      </div>

      <MetricsGrid data={data} />
      <ChartsSection data={data} />
    </div>
  )
}
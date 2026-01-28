import { Analytics } from "@/types"

export async function getAnalytics(): Promise<Analytics> {
  const res = await fetch("/api/analytics")

  if (!res.ok) {
    throw new Error("Erro ao buscar analytics")
  }

  return res.json()
}

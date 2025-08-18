"use client"

import { ColumnDef } from "@tanstack/react-table"

// Shape of a row
export type Order = {
  id: number
  client: string
  total: string
  status: string
  date:string
  country:string
}

export const columns: ColumnDef<Order>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "client", header: "Client" },
  { accessorKey: "total", header: "Category" },
  { accessorKey: "status", header: "status" },
  { accessorKey: "date", header: "Date" },
  { accessorKey: "country", header: "State" }
]

"use client"

import { ColumnDef } from "@tanstack/react-table"

// Shape of a row
export type Client = {
  id: number
  name: string
  email: string
  phonenumber: string
  country:string
}

export const columns: ColumnDef<Client>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Client" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "phonenumber", header: "phone Number" },
  { accessorKey: "country", header: "Country" }
]

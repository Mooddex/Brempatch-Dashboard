"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, Eye, EyeOff } from "lucide-react"

// Shape of a row
export type message = {
  id: number
  name: string
  email: string
  subject: string
  message_content: string
  timestamp: string
  is_read: boolean
  sent:boolean
}

// Utility function to truncate text
const truncateText = (text: string, maxLength: number = 30) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

// Utility function to format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

export const columns: ColumnDef<message>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 60,
    cell: ({ getValue }) => (
      <div className="w-[60px]">
        {getValue() as number}
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="h-auto p-0 font-medium"
      >
        From
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    size: 150,
    cell: ({ getValue }) => (
      <div className="w-[150px]">
        <div className="font-medium truncate" title={getValue() as string}>
          {truncateText(getValue() as string, 20)}
        </div>
      </div>
    ),
  },
  
  {
    accessorKey: "subject",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="h-auto p-0 font-medium"
      >
        Subject
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    size: 20,
    cell: ({ getValue }) => (
      <div className="w-[200px]">
        <div className="font-medium truncate" title={getValue() as string}>
          {truncateText(getValue() as string, 30)}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "message_content",
    header: "Message",
    size: 250,
    cell: ({ getValue }) => (
      <div className="w-[250px]">
        <div className="text-sm text-muted-foreground truncate" title={getValue() as string}>
          {truncateText(getValue() as string, 40)}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "timestamp",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="h-auto p-0 font-medium"
      >
        Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    size: 100,
    cell: ({ getValue }) => (
      <div className="w-[140px]">
        <div className="text-sm">
          {formatDate(getValue() as string)}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "is_read",
    header: "Status",
    size: 80,
    cell: ({ getValue }) => (
      <div className="w-[80px]">
        {getValue() ? (
          <Badge variant="default" className="bg-green-100 text-green-800">
            <Eye className="w-3 h-3 mr-1" />
            Read
          </Badge>
        ) : (
          <Badge variant="destructive" className="bg-red-100 text-red-800">
            <EyeOff className="w-3 h-3 mr-1" />
            Unread
          </Badge>
        )}
      </div>
    ),
  },
//     {
//     accessorKey: "sent",
//     header: "",
//   },
]
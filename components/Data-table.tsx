"use client"

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef
} from "@tanstack/react-table"

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  className?: string
}

export function DataTable<TData, TValue>({
  columns,
  data,
  className = ""
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className={`w-full ${className}`}>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[600px] sm:min-w-[800px]">
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr 
                  key={headerGroup.id}
                  className="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 dark:border-gray-700 dark:from-gray-800 dark:to-gray-700"
                >
                  {headerGroup.headers.map(header => (
                    <th
                      key={header.id}
                      className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={`
                      group transition-all duration-200 ease-in-out
                      hover:bg-blue-50 hover:shadow-sm dark:hover:bg-gray-800/50
                      ${index % 2 === 0 
                        ? "bg-white dark:bg-gray-900" 
                        : "bg-gray-50/30 dark:bg-gray-800/30"}
                    `}
                  >
                    {row.getVisibleCells().map(cell => (
                      <td
                        key={cell.id}
                        className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-900 dark:group-hover:text-blue-100 transition-colors duration-200"
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td 
                    colSpan={columns.length} 
                    className="px-6 py-12 text-center text-gray-500 dark:text-gray-400"
                  >
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="text-4xl opacity-50">📊</div>
                      <p className="text-lg font-medium">No data available</p>
                      <p className="text-sm">There are no records to display at this time.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Optional: Export a variant with loading state
export function DataTableWithLoading<TData, TValue>({
  columns,
  data,
  isLoading = false,
  className = ""
}: DataTableProps<TData, TValue> & { isLoading?: boolean }) {
  if (isLoading) {
    return (
      <div className={`w-full ${className}`}>
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
          <div className="animate-pulse">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 px-6 py-4">
              <div className="flex space-x-4">
                {columns.map((_, index) => (
                  <div key={index} className="h-4 bg-gray-300 dark:bg-gray-600 rounded flex-1"></div>
                ))}
              </div>
            </div>
            {[...Array(5)].map((_, rowIndex) => (
              <div key={rowIndex} className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                <div className="flex space-x-4">
                  {columns.map((_, colIndex) => (
                    <div key={colIndex} className="h-4 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return <DataTable columns={columns} data={data} className={className} />
}

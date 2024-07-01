import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "./button"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  sku: string
  name: string
  description: string
  price: number
}

export const columns: ColumnDef<Product>[] = [
     {
          accessorKey: "sku",
          header: ({ column }) => {
               return (
               <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    SKU
                    <ArrowUpDown className="ml-2 h-4 w-4" />
               </Button>
               )
          }
     },
     {
          accessorKey: "name",
          header: ({ column }) => {
               return (
               <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
               </Button>
               )
          }
     },
     {
          accessorKey: "description",
          header: ({ column }) => {
               return (
               <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Description
                    <ArrowUpDown className="ml-2 h-4 w-4" />
               </Button>
               )
          }
     },
     {
          accessorKey: "price",
          header: ({ column }) => {
               return (
               <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Price
                    <ArrowUpDown className="ml-2 h-4 w-4" />
               </Button>
               )
          }
     },
]

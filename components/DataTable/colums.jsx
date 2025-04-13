"use client";

import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Photo from "@/assets/DataTableImage.svg";

// Define your columns
export const columns = [
  {
    accessorKey: "actions2",
    header: "Name",
    cell: ({ row }) => {
      const rowData = row.original;
      return (
        <div className="flex items-center space-x-2">
          <Image
            src={Photo}
            alt="Profile Picture"
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-medium">{rowData.Team}</span>
            <span className="text-sm text-muted-foreground">
              {rowData.Role}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "Team",
    header: "Team",
  },
  {
    accessorKey: "Role",
    header: "Role",
  },
  {
    accessorKey: "Generated",
    header: "Generated",
  },
  {
    accessorKey: "Assigned",
    header: "Assigned",
  },
  {
    id: "actions", // Use `id` instead of accessorKey for custom cells
    header: "Actions",
    cell: ({ row }) => {
      const rowData = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => alert(`Viewing ${rowData.Team}`)}>
              View
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert(`Editing ${rowData.Team}`)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert(`Deleting ${rowData.Team}`)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

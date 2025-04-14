"use client";

import { useState } from "react";
import {
  MoreVertical,
  UserMinus,
  UserRoundCog,
  Shield,
  ShieldQuestion,
  Star
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Photo from "@/assets/DataTableImage.svg";
import TeamMemberDialog from "../editTeamMember";

export const columns = [
  {
    accessorKey: "actions2",
    header: "Team ",
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
              {rowData.Last}
            </span>
          </div>
        </div>
      );
    },
  },
  // {
  //   accessorKey: "Team",
  //   header: "Team",
  // },
  {
    accessorKey: "Role",
    header: () => (
      <div className="flex items-center gap-2">
        <span>Role</span>
        <ShieldQuestion className="w-4 h-4 text-muted-foreground" />
      </div>
    ),
    cell: ({ row }) => {
      const role = row.getValue("Role");
      const isAdmin = role === "Admin";

      return (
        <div className= "flex items-center gap-1.5">
        <Star className={ isAdmin ? "w-3 h-3 text-blue-500" : "w-3 h-3 text-muted-foreground"}/>
        <span
          className={
            isAdmin ? "text-blue-500 font-medium bg-blue-200 p-0.5  " : "text-muted-foreground "
          }
        >
          {role}
        </span>
        </div>
      );
    },
  },
  {
    accessorKey: "Generated",
    header: () => (
      <div className="flex items-center gap-2">
        <span>Generate</span>
        <ShieldQuestion className="w-4 h-4 text-muted-foreground" />
      </div>
    ),
  },
  {
    accessorKey: "Unlocked",
    header: () => (
      <div className="flex items-center gap-2">
        <span>Unlocked</span>
        <ShieldQuestion className="w-4 h-4 text-muted-foreground" />
      </div>
    ),
  },
  {
    accessorKey: "Assigned",
    header: () => (
      <div className="flex items-center gap-2">
        <span>Assigned</span>
        <ShieldQuestion className="w-4 h-4 text-muted-foreground" />
      </div>
    ),
    cell: ({ row }) => {
      const assignedValue = row.getValue("Assigned");
      const index = row.index;
  
      const getMedal = (i) => {
        if (i === 0) return "🥇";
        if (i === 1) return "🥈";
        if (i === 2) return "🥉";
        return null;
      };
  
      const medal = getMedal(index);
  
      return (
        <div className="flex items-center gap-2">
          {medal && <span className="text-xl">{medal}</span>}
          <span>{assignedValue}</span>

        </div>
      );
    }
  },
  
  {
    id: "actions",
    header: "",
    cell: ({ row }) => {
      const rowData = row.original;
      const [openDialog, setOpenDialog] = useState(false);

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setOpenDialog(true)}>
                {" "}
                <UserRoundCog />
                Manage Role
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => alert(`Editing ${rowData.Team}`)}
              >
                <UserMinus className="text-red-600" />
                <span className="text-red-600">Remove From Team</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <TeamMemberDialog open={openDialog} setOpen={setOpenDialog} />
        </>
      );
    },
  },
];

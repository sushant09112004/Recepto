"use client";

import { useState, useEffect } from "react";
import { Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function TeamMemberDialog({
  open,
  setOpen,
  mode = "add",
  defaultData = {},
}) {
  const isEdit = mode === "edit";

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("admin");

  useEffect(() => {
    if (isEdit && defaultData) {
      setEmail(defaultData.email || "");
      setRole(defaultData.role || "admin");
    } else {
      setEmail("");
      setRole("admin");
    }
  }, [open, isEdit, defaultData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, role };
    console.log(`${isEdit ? "Editing" : "Adding"} Member:`, payload);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <div className="flex justify-center mb-2">
          <div className="bg-blue-100 p-4 rounded-full">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
        </div>

        <DialogHeader>
          <DialogTitle className="text-xl text-center">
            {isEdit ? "Edit Team Member" : "Edit Team Member"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {isEdit
              ? "Make changes to team member information"
              : "Make Changes to Team Member Information"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="colleague@company.com"
              required
            />
          </div>

          <div className="space-y-2 w-full">
            <label htmlFor="role" className="text-sm font-medium">
              Role
            </label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="member">Member</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="flex sm:justify-between">
            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
            >
              {isEdit ? "Save" : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog"

export default function LogoutDialogWithImage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button onClick={() => setOpen(true)}>Open Logout Dialog</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
          <div className="p-6 space-y-6">
            <div className="flex justify-start">
              <div className="text-blue-600 font-bold text-2xl">
                {/* If you have the Recepto logo image, you can use it here */}
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ip6ZUhXwztVc96DscYChXseMWaxpuI.png"
                  alt="Recepto Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Log out ?</h2>
              <p className="text-gray-500">You'd have to login again to the platform.</p>
            </div>
          </div>

          <DialogFooter className="flex flex-col p-6 pt-0 gap-3">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setOpen(false)}>
              Logout
            </Button>
            <Button
              variant="outline"
              className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

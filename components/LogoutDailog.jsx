
import { Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
 } from "./ui/dialog"
 import { Button } from "./ui/button"
 import Logo from "@/assets/logo.svg"
 import Image from "next/image"
export default function LogoutDialogWithImage({
  open,
  setOpen,
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
        <div className="p-6 space-y-6">
          <div className="flex justify-start">
            <Image
              src={Logo}
              alt="Recepto Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
          <DialogHeader>
            <DialogTitle>Log out?</DialogTitle>
            <DialogDescription>
              You’d have to login again to the platform.
            </DialogDescription>
          </DialogHeader>
        </div>

        <DialogFooter className="flex flex-col p-6 pt-0 gap-3">
          {/* <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => {
              // Perform logout
              setOpen(false)
            }}
          >
            Logout
          </Button> */}
          <Button
            variant="outline"
            className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
            onClick={() => setOpen(false)}
          >
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

"use client";

import { usePathname } from "next/navigation";
import Layoutwrapper from "@/components/Layout/Layoutwrapper";

export default function AppLayout({ children }) {
  const pathname = usePathname();

  // If the current path is '/', skip the layout wrapper (e.g., login page)
  const noLayoutNeeded = pathname === "/";

  return noLayoutNeeded ? children : <Layoutwrapper>{children}</Layoutwrapper>;
}

import Container from "@/components/ui/Container"
import Navbar from "@/components/ui/Navbar"
import Sidebar from "@/components/ui/Sidebar"

import React from "react"

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  )
}
export default layout

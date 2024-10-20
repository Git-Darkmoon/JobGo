import Container from "@/components/ui/Container"
import Navbar from "@/components/ui/Navbar"
import Sidebar from "@/components/ui/Sidebar"

import React from "react"

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <section className="flex">
        <Sidebar />
        <Container>{children}</Container>
      </section>
    </>
  )
}
export default layout

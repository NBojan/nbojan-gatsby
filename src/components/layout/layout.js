import React from "react"
import { Navbar, Footer, Sidebar, ScrollTop } from "../../components";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main>
        {children}
      </main>

      <Footer />
      <ScrollTop />
    </>
  )
}
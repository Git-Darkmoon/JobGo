import Link from "next/link"
import Button from "./Button"

function Navbar() {
  return (
    <header className="h-16 w-full fixed top-0 z-10 flex items-center justify-between px-12 text-slate-100">
      <div></div>
      <nav className="space-x-12">
        <Link className="after:w-4 after:h-0.5 after:bg-slate-100" href="/">
          About Us
        </Link>
        <Button variant="outline">
          <Link href="/">Sign In</Link>
        </Button>
      </nav>
    </header>
  )
}
export default Navbar

import Link from "next/link"
import Button from "./Button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

function Navbar() {
  return (
    <header className="h-16 w-full fixed top-0 z-10 flex items-center justify-between px-12 text-slate-100">
      <div></div>
      <nav className="space-x-12">
        <Link className="after:w-4 after:h-0.5 after:bg-slate-100" href="/">
          About Us
        </Link>
        <SignedOut>
          <Button variant="outline">
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  )
}
export default Navbar

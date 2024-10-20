import { SignedIn, UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"

async function Navbar() {
  const user = await currentUser()

  return (
    <header className="h-16 w-full bg-primary z-10 flex items-center justify-between px-12 text-slate-100">
      <div className="text-4xl font-bold italic">
        <h2>
          Job<span className="text-gradient-green">Go</span>
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <p className="font-semibold text-gradient-green">
          Hello, {user?.firstName}
        </p>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  )
}
export default Navbar

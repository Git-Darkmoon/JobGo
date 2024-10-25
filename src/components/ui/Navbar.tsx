import { SignedIn, UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import VaulDrawer from "@/components/ui/VaulDrawer"
import Link from "next/link"
import { ROUTES } from "@/lib/routes"

async function Navbar() {
  const user = await currentUser()

  return (
    <header className="h-16 w-full bg-primary z-10 flex items-center justify-between px-3 lg:px-12 text-slate-100">
      <div className="text-4xl font-bold italic flex items-center gap-6">
        <div className="cursor-pointer lg:hidden">
          <VaulDrawer />
        </div>
        <Link
          className="decoration-slate-100 hover:underline underline-offset-4"
          href={ROUTES.HOME}
        >
          <h2>
            Job<span className="text-gradient-green">Go</span>
          </h2>
        </Link>
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

import { ClerkProvider } from "@clerk/nextjs"
import NextTopLoader from "nextjs-toploader"
import { Toaster } from "sonner"

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <Toaster />
      {children}
    </ClerkProvider>
  )
}
export default Providers

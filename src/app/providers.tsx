import { ClerkProvider } from "@clerk/nextjs"
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

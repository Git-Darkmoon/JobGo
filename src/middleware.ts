import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { ROUTES } from "./lib/routes"

const isProtectedRoute = createRouteMatcher([
  ROUTES.ADD_JOB,
  ROUTES.ALL_JOBS,
  ROUTES.STATS,
])

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}

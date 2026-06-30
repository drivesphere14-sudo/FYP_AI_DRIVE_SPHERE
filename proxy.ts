import { type NextRequest } from "next/server"
import { updateSession } from "@/lib/supabase/middleware"

export async function proxy(request: NextRequest) {
  return await updateSession(request)
}

// OPTIMIZED: Only protect admin routes
// This drastically reduces middleware execution
export const config = {
  matcher: [
    "/admin/:path*",
  ],
}

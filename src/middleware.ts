export { auth as middleware } from "@/auth"

export const config = {
  matcher: [
    // routes ที่ต้องการให้มี auth
    "/auth/:path*",
    "/console/:path*",
    "/api/:path*",
  ]
}
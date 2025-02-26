import { NextRequest, NextResponse } from 'next/server'
 
// 1. Specify protected and public routes
const protectedRoutes = ['/pages/dashboard','/pages/tasks','/pages/notifications']
const publicRoutes = [ '/signup']
 
export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

    // 3. Decrypt the session from the cookie
    const session = true
 
  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
 
  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session &&
    !req.nextUrl.pathname.startsWith('/pages/dashboard')
  ) {
    return NextResponse.redirect(new URL('/pages/dashboard', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
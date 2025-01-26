import { NextResponse, NextRequest } from 'next/server';
import { API_URL } from './utils/constant';


export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  
  const token = req.cookies.get('auth-token');
//   const tokenJson = req.cookies.get('persist:root');
if(token){
    //return NextResponse.json({"name":token});
}   
  


  // Define public routes
  const publicRoutes = ['/', '/about', '/login', '/signup', '/cart'];

  // Allow public routes to pass through
  if (publicRoutes.some((route) => url.pathname?.startsWith(route))) {
    return NextResponse.next();
  }

  if (!token) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // Validate token (optional: verify with an API call)
  try {
    const res = await fetch(`${API_URL}/api/validate-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
    const { valid } = await res.json();

    if (!valid) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  } catch (error) {
    console.error('Token validation error:', error);
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Apply middleware only to protected routes
export const config = {
  matcher: ['/dashboard/:path*', '/my-pages/:path*'], // Add protected routes here
};

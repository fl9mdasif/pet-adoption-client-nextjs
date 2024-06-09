import { NextResponse } from "next/server";

export default async function middleware(req: any) {
  const authToken = req.headers.authorization;
  console.log(authToken);

  if (!authToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};

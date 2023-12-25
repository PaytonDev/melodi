import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = [
  "/",
  "/playlist",
  "/playlist/:id",
  "/artist",
  "/artist/:id",
  "/search",
  "/search/:query",
  "/settings",
  "/settings/:id",
  "/library",
];

export default function middleware(req) {
  if (protectedRoutes.find((p) => p === req.nextUrl.pathname)) {
    const token = cookies().has("MELODI_ACCESS_TOKEN");

    const url = new URL(req.nextUrl.href);
    url.pathname = "/signin";

    if (!token) {
      return NextResponse.redirect(url.toString());
    }
  }
}

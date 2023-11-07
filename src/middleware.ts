export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*"], // Vérifiez seulement les chemins qui commencent par /dashboard
};

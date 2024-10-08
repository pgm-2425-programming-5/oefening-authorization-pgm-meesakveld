import type { Metadata } from "next";
import "./globals.css";
import LoginButton from "./posts/components/common/LoginButton";
import LogoutButton from "./posts/components/common/LogoutButton";
import { getServerSession } from "next-auth";


export const metadata: Metadata = {
  title: "CRUD Demo",
  description: "A simple CRUD demo using Next.js",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        {children}
        {session ? <LogoutButton /> : <LoginButton />}
      </body>
    </html>
  );
}

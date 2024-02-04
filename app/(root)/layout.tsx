import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
import Topbar from "../components/shared/Topbar";
import Leftsidebar from "../components/shared/LeftSidebar";
import Rightsidebar from "../components/shared/RightSidebar";
import Bottombar from "../components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <main className="flex flex-row">
          <Leftsidebar />
          <section className="main-container">
            <div className='w-full max-w-4xl'>
              {children}
            </div>
          </section>
          <Rightsidebar />
        </main>
        <Bottombar />
        </body>
    </html>
    </ClerkProvider>
  );
}

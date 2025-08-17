import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SideBar from "@/components/Side-bar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import FooterComp from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Modern dashboard application with analytics and management tools",
  keywords: ["dashboard", "analytics", "management", "admin"],
  authors: [{ name: "Mahmoud Salama" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-background text-foreground min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <div className="flex min-h-screen w-full">
              <SideBar />

              <div className="flex flex-1 flex-col">
                <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-sm border-b border-border">
           <Navbar />
            <div className="flex items-center gap-4 px-4 py-2">
              <SidebarTrigger className="lg:hidden" />
            </div>

                </header>

                <main className="">
                  <div className="container mx-auto px-4 py-6">{children}</div>
                </main>

                <FooterComp />
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

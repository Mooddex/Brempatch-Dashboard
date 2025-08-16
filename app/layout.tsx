import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SideBar from "@/components/Side-bar";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO + OpenGraph metadata
export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Modern dashboard application with analytics and management tools",
  keywords: ["dashboard", "analytics", "management", "admin"],
  authors: [{ name: "Your Name" }],
};

// ✅ viewport must be exported separately in Next.js 13+
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-gray-50 dark:bg-gray-900 min-h-screen">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            {/* Sidebar */}
            <SideBar />
            
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
              {/* Top Navbar */}
              <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 px-4 py-2">
                  <SidebarTrigger className="lg:hidden" />
                  {/* <div className="flex-1">
                    <Navbar />
                  </div> */}
                </div>
              </header>

              {/* Main Content */}
              <main className="flex-1 overflow-auto">
                <div className="container mx-auto px-4 py-6">
                  {children}
                </div>
              </main>

              {/* Optional Footer */}
              <footer className="border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <p>&copy; 2024 Dashboard App. All rights reserved.</p>
                    <div className="flex gap-4 mt-2 sm:mt-0">
                      <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
                        Privacy
                      </a>
                      <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
                        Terms
                      </a>
                      <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
                        Support
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}

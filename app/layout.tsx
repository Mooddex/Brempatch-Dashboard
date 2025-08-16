import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SideBar from "@/components/Side-bar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

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
  authors: [{ name: "Your Name" }],
};

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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-background text-foreground min-h-screen">
        {/* ✅ ThemeProvider should wrap the entire app */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <div className="flex min-h-screen w-full">
              {/* Sidebar */}
              <SideBar />

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-sm border-b border-border">
                  <div className="flex items-center gap-4 px-4 py-2">
                    <SidebarTrigger className="lg:hidden" />
                    <div className="flex-1">
                      <Navbar />
                    </div>
                  </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 overflow-auto">
                  <div className="container mx-auto px-4 py-6">
                    {children}
                  </div>
                </main>

                {/* Footer */}
                <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
                  <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
                      <p>&copy; 2024 Dashboard App. All rights reserved.</p>
                      <div className="flex gap-4 mt-2 sm:mt-0">
                        <a href="#" className="hover:text-foreground transition-colors">
                          Privacy
                        </a>
                        <a href="#" className="hover:text-foreground transition-colors">
                          Terms
                        </a>
                        <a href="#" className="hover:text-foreground transition-colors">
                          Support
                        </a>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import StoreProvider from "@/components/StoreProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dropbox clone",
  description: "A dropbox clone Created by HunterXNB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <StoreProvider>
        <html lang="en">
          <body className={inter.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Toaster position="bottom-center" />
            </ThemeProvider>
          </body>
        </html>
      </StoreProvider>
    </ClerkProvider>
  );
}

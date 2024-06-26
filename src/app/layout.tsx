import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Providers from "@/lib/Providers/Providers";
import { Toaster } from "sonner";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

// const inter = Inter({ subsets: ["latin"] }); className={inter.className}

export const metadata: Metadata = {
  title: "Pet adoption care",
  description: "adopt pet for your family",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <>
              {/* <Navbar /> */}
              <Toaster position="bottom-right" />
              {children}
              {/* <Footer /> */}
            </>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}

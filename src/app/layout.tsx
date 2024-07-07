import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MTalk",
  description: "Discover new friends and express yourselfs on MTalk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ChakraProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ChakraProvider>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Madhumitha | Software Engineer for Sales, Product, and Business Roles",
  description: "Software engineer who builds technology and makes it easy for clients to understand and use.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
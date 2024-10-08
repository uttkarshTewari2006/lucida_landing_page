import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="retro" lang="en">
      <head>
        <title>Lucida</title>
        <description>
          In this fast-paced world, it's easy to lose sight of ourselves. Lucida
          is an innovative and therapeutic chatbot designed to promote self-love
          and assist with various everyday dilemmas, struggles, and difficult
          moments.
        </description>
      </head>
      <body className={inter.className + "text-black"}>
        {children} <Analytics></Analytics>
      </body>
    </html>
  );
}

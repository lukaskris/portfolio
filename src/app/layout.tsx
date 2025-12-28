import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lukas Kristianto | Lead Mobile & AI Engineer",
  description: "Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;700&family=Geist+Mono:wght@400;700&display=swap" />
        <meta name="keywords" content="Lukas Kristianto, Mobile Engineer, AI Specialist, Android, Flutter, Next.js, Portfolio" />
        <meta name="author" content="Lukas Kristianto" />
        <meta property="og:title" content="Lukas Kristianto | Lead Mobile & AI Engineer" />
        <meta property="og:description" content="Portfolio of Lukas Kristianto, Lead Mobile Engineer and AI Specialist." />
        <meta property="og:image" content="/lukas.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lukas Kristianto | Lead Mobile & AI Engineer" />
        <meta name="twitter:description" content="Portfolio of Lukas Kristianto, Lead Mobile Engineer and AI Specialist." />
        <meta name="twitter:image" content="/lukas.png" />
      </head>
      <body
        className={`font-geist antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

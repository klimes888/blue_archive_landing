import type React from "react";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "Blue archive!",
  description: "학원, 학생, 그리고 당신의. 기적 같은 이야기. 기적 같은 일상",
  openGraph: {
    title: "Blue archive!",
    description: "학원, 학생, 그리고 당신의. 기적 같은 이야기. 기적 같은 일상",
    url: "/",
    type: "website",
    images: [
      {
        url: "/shiroko.jpeg",
        alt: "image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue archive!",
    description: "학원, 학생, 그리고 당신의. 기적 같은 이야기. 기적 같은 일상",
    images: [
      {
        url: "/shiroko.jpeg",
        alt: "Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

import "./globals.css";

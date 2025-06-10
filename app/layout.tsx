import type React from "react";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "Blue archive!",
  description: "Pantasia | 나만의 설정집 나만의 세계관을 창조해보세요",
  openGraph: {
    title: "Blue archive!",
    description: "학원, 학생, 그리고 당신의. 기적 같은 이야기. 기적 같은 일상",
    url: "/shiroko.jpeg",
    type: "website",
    images: [
      {
        url: "",
        alt: "pantasia - image",
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

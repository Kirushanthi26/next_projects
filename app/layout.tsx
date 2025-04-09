import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

type layoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: Readonly<layoutProps>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

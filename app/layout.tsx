import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Interview",
  description: "Frequently asked React questions from real-world interviews.",
};

/**
 * The root layout component.
 *
 * This component is responsible for rendering the root `<html>` and `<body>`
 * elements, as well as the `<Navbar>` component, and the children passed to it
 * as props.
 *
 * It also includes the Vercel Speed Insights and Analytics components.
 *
 * @param {{ children: ReactNode }} props - The props passed to this component.
 * @prop {ReactNode} children - The children to be rendered inside the `<body>`
 *     element.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6815683792550156" />
        <meta property="og:title" content="React Interview" />
        <meta
          property="og:description"
          content="Frequently asked React questions from real-world interviews."
        />
        <meta
          property="og:url"
          content="https://interview-questions-zeta.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

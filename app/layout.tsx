import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { TanstackProvider } from "@/components/tanstack-provider";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MathonGo - JEE Main Prep",
  description:
    "Prepare for JEE Main with MathonGo. Access chapter-wise past year questions (PYQs) from 2025 to 2009, covering 173 papers and 15,825 questions across Physics, Chemistry, and Mathematics.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "MathonGo - JEE Main Prep",
    description:
      "Your ultimate platform for JEE Main preparation. Access 15,825 questions across Physics, Chemistry, and Mathematics.",
    url: "https://your-vercel-app-url.vercel.app", // Replace with your Vercel URL
    siteName: "MathonGo",
    images: [
      {
        url: "/nta.png", // Replace with a suitable image URL in your public folder
        width: 1200,
        height: 630,
        alt: "MathonGo JEE Main Prep",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MathonGo - JEE Main Prep",
    description:
      "Prepare for JEE Main with MathonGo. Access 15,825 questions across Physics, Chemistry, and Mathematics.",
    images: ["/nta.png"], // Replace with a suitable image URL
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#222E3F", // Matches the dark mode background color
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TanstackProvider>{children}</TanstackProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

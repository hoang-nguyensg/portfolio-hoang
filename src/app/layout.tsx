import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nguyenhuyhoang.dev"),
  title: {
    default: "Nguyen Huy Hoang",
    template: "%s | Nguyen Huy Hoang",
  },
  description:
    "AI Engineer specializing in Computer Vision, Vision-Language Models, and Applied ML Systems. Open to remote and on-site AI/ML roles.",
  keywords: [
    "AI Engineer",
    "AI Intern",
    "Computer Vision",
    "Vision-Language",
    "Machine Learning",
    "PyTorch",
    "Hugging Face",
    "Vietnam",
    "Ho Chi Minh City",
    "Nguyen Huy Hoang",
  ],
  authors: [{ name: "Nguyen Huy Hoang", url: "https://nguyenhuyhoang.dev" }],
  creator: "Nguyen Huy Hoang",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nguyenhuyhoang.dev",
    siteName: "Nguyen Huy Hoang",
    title: "Nguyen Huy Hoang",
    description:
      "AI Engineer specializing in Computer Vision, Vision-Language Models, and Applied ML Systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nguyen Huy Hoang — AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Huy Hoang",
    description:
      "AI Engineer specializing in Computer Vision, Vision-Language Models, and Applied ML Systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

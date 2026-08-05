import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Pet Bottle Making Machine Manufacturer in Delhi | GS Machinery",
  description: "Looking for a trusted Pet Bottle Making Machine manufacturer in Delhi? GS Machinery has been making reliable, ISO-certified PET blowing machines since 2008. Get the best price today.",
  keywords: "Pet Bottle Making Machine, Pet Bottle Making Machine Manufacturer, Pet Bottle Making Machine Manufacturer in Delhi, GS Machinery",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

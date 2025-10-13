import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

// Geist local font
const geistSans = localFont({
  src: "../fonts/Geist-VariableFont_wght.ttf",
  variable: "--font-geist-sans",
  weight: "400",
  style: "normal",
});

// Optional: comment this out for now if Geist Mono is missing
// const geistMono = localFont({
//   src: "../fonts/GeistMono-Regular.woff2",
//   variable: "--font-geist-mono",
//   weight: "400",
// });

export const metadata: Metadata = {
  title: "PawFection Grooming",
  description: "Mobile Dog Grooming at Your Doorstep 🐾",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

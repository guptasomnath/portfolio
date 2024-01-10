import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppin = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Somnath Gupta",
  description:
    "Aspiring MERN Stack Developer | Somnath Gupta | Transforming ideas into web experiences with React.js and Node.js. Actively seeking new opportunities. Let's connect and build something great! 🚀 #MERNstack #WebDevelopment #SomnathGupta #JobSeeker #Hiring",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppin.className}>
        <main className="w-full h-[100dvh] px-52 sm:px-0 md:px-16 lg:px-24 xmd:px-10">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

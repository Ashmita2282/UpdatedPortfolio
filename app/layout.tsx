import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Developer | MERN Stack Portfolio",
  description: "Motivated Full Stack Developer with expertise in MERN stack, building scalable web applications and RESTful APIs.",
  keywords: ["Full Stack Developer", "MERN Stack", "React", "Node.js", "MongoDB", "Portfolio"],
  authors: [{ name: "Full Stack Developer" }],
  openGraph: {
    title: "Full Stack Developer | MERN Stack Portfolio",
    description: "Motivated Full Stack Developer with expertise in MERN stack",
    type: "website",
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


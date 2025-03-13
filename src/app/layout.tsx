import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], });


export const metadata = {
  title: "Welcome to Innovage Cloud",
  description: "Your website description",
  icons: {
      icon: "/img/logo/favicon.ico",         // Standard favicon
      shortcut: "/img/logo/favicon.ico",     // For Apple devices
      // apple: "/apple-touch-icon.png" // 180x180px for Apple touch icon (optional)
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="light"
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

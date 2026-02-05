import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Header, Navbar } from "@/components/client";
import { Footer, FloatingPhoneButton } from "@/components/server";
import { Providers } from "@/providers";
import { GoogleAnalytics } from "@/components/analytics";
import Script from "next/script";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trang Thông Tin Điện Tử - UBND Phường",
  description: "Trang thông tin điện tử UBND Phường. Tin tức, thông báo, thủ tục hành chính và dịch vụ công trực tuyến.",
  keywords: "Phường, UBND, thông tin điện tử, tin tức, thủ tục hành chính, dịch vụ công",
  icons: {
    icon: "images/quochuy.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G80S4ZGW4H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G80S4ZGW4H');
          `}
        </Script>
      </head>
      <body
        className={`${merriweather.variable} ${inter.variable}`}
      >
        <Providers>
          <Theme accentColor="red" grayColor="slate" radius="medium" scaling="100%">
            <Header />
            <Navbar />
            <main style={{ minHeight: "60vh" }}>
              {children}
            </main>
            <Footer />
            <FloatingPhoneButton />
          </Theme>
        </Providers>
        <GoogleAnalytics />
      </body>
    </html>
  );
}

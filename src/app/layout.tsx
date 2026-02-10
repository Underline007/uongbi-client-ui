import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Header, Navbar } from "@/components/client";
import { Footer, FloatingPhoneButton } from "@/components/server";
import { Providers } from "@/providers";
import { GoogleAnalytics, PageTracker, WebVitals } from "@/components/analytics";
import { getOrganization } from "@/lib/organization";

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
  title: "Trang Thông Tin Điện Tử - UBND Phường Hà Lầm",
  description: "Trang thông tin điện tử UBND Phường Hà Lầm. Tin tức, thông báo, thủ tục hành chính và dịch vụ công trực tuyến.",
  keywords: "Phường Hà Lầm, UBND Phường Hà Lầm, thông tin điện tử Phường Hà Lầm, tin tức Phường Hà Lầm, thủ tục hành chính  Phường Hà Lầm, dịch vụ công Phường Hà Lầm",
  icons: {
    icon: "images/quochuy.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const org = await getOrganization();

  return (
    <html lang="vi">
      <body
        className={`${merriweather.variable} ${inter.variable}`}
      >
        <Providers>
          <Theme accentColor="red" grayColor="slate" radius="medium" scaling="100%">
            <Header orgName={org?.name} logoUrl={org?.logo_url} />
            <Navbar />
            <main style={{ minHeight: "60vh" }}>
              {children}
            </main>
            <Footer org={org} />
            <FloatingPhoneButton phone={org?.phone} />
          </Theme>
        </Providers>
        <GoogleAnalytics />
        <PageTracker />
        <WebVitals />
      </body>
    </html>
  );
}

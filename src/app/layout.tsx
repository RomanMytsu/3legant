import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import { Header } from "@/widgets/header/ui/Header";
import { Footer } from "@/widgets/footer/Footer";
import "@/shared/styles/globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-family",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--second-family",
  weight: ["400", "500", "600"],
  style: ["normal"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--third-family",
  weight: ["500"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "3legant — Modern Furniture & Decor",
    template: "%s | 3legant",
  },
  description:
    "Elevate your space with premium modern furniture and interior decor.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

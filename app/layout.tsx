import "../public/css/main.css";
import { Inter } from "next/font/google";
import Header from "./Base/Header";
import Footer from "./Base/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Cary",
  description:
    "Cary is a platform for discovering the best new products, brands, and influencers in fashion and beauty.",
  openGraph: {
    title: "Cary facebook",
    description:
      "Cary is a platform for discovering the best new products, brands, and influencers in fashion and beauty.",
    images: [
      {
        url: "https://cary.arealglam.com/images/logo.png",
        width: 800,
        height: 600,
        alt: "Cary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NicoTery39168",
    title: "Cary",
    description:
      "Cary is a platform for discovering the best new products, brands, and influencers in fashion and beauty.",
    image: "https://cary.arealglam.com/images/logo.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main">
          {children}
          <Footer />
        </main>
        <div id="popups"></div>
      </body>
    </html>
  );
}

import "../public/css/main.css";
import { Inter } from "next/font/google";
import Header from "./Base/Header";
import Footer from "./Base/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Social",
  description: "Description for social.",
  openGraph: {
    title: "Social facebook",
    description: "Description for social.",
    images: [
      {
        url: "https://react-social-kappa.vercel.app/logo.svg",
        width: 800,
        height: 600,
        alt: "Social",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social",
    description: "Description for social.",
    image: "https://react-social-kappa.vercel.app/logo.svg",
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

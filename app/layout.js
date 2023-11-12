import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const LB = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Galleria",
  description: "FrontEnd challenges",
};

export default function RootLayout({ children }) {
  return (
    <html className="w-screen h-screen" lang="en">
      <body className={`${LB.className} w-full h-full`}>{children}</body>
    </html>
  );
}

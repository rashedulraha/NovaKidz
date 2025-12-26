import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: {
    default: "Nova Kidz",
    template: "%s | Nova Kidz",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased h-screen flex flex-col`}>
        <header>
          <Navbar />
        </header>
        <main className="container mx-auto px-4 py-2 flex-1">{children}</main>
        <footer className="bg-gray-200">
          <div className="container mx-auto px-4 py-2">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}

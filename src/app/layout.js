import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Assetyans",
  description: "Создание песен и видеоклипов для бизнеса",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}

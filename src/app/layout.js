import "./globals.css";
import Navbar from "../components/Navbar";

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
      </body>
    </html>
  );
}

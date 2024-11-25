import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";



export const metadata = {
  title: "Titulo do site",
  description: "Tarefa dificil",
  charset: 'UTF-8',
  author: 'Rodolfo Bezerra Lisboa',
  keywords: 'Sei q nada sei'


};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

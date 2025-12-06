import "./globals.css";
import AddAnimation from "@/Components/Shared/AddAnimation";
import Footer from "@/Components/Shared/Footer";
import Header from "@/Components/Shared/Header/Header";


export const metadata = {
  title: "PTA - Personal Training Academy | Heiderscheid, Luxembourg",
  description: "Deine Personal Training Academy in Luxembourg - Functional Training, Rehabilitation und mehr. Für jeden Körper, für jedes Ziel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <AddAnimation/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

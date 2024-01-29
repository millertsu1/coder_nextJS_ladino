import "./globals.css"
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

export const metadata = {
  title: "FokiuCode App",
  description: "Webpage generated by create next app and Tailwind, this webpage contains a blog and a portfolio web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}

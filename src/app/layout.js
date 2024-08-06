import { Inter } from "next/font/google";
import "../app/globals.css"
import Providers from "../../store/provider";
import NavBar from "./sections/navBarSection/NavBar";
import Header from "./sections/headerSection/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Square Shop",
  description: "where you can buy squares",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <NavBar/>
          <Header/>
          {children}
        </body>
      </Providers>
    </html>
  );
}

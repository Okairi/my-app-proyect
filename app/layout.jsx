import { NavBar } from "../components/NavBar";
import { Roboto } from "next/font/google";
export const metadata = {
  title: "Mi tienda con next",
  description: "Esta es la página principal de la tienda",
  keywords: "tienda, online, next,ecomerce",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}

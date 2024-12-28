import type { Metadata } from "next";
import "./globals.css";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import { body } from "./_utils/_fonts";
import Footer from "./_components/footer";
import TopBar from "./_components/top-bar";



const authors: Author[] = [
  {name: "Luis Domingos Marques", url: "https://www.linkedin.com/in/lu%C3%ADs-marques369/"},
  {name: "Alçada Digital"}
]
export const metadata: Metadata = {
  title: "AngoMinas",
  description: "Site de notícias mineiras, para amantes de minas",
  authors
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={body.style}>
         <TopBar />
        {children}
        <Footer pinted/>
      </body>
    </html>
  );
}

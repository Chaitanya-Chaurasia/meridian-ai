import { Header } from "@/components/app/header";
import { Footer } from "@/components/app/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";


export const metadata: Metadata = {
  title: "Next",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Web Anatomy by Calumma",
  description:
    "An interactive reference tool for understanding website structures, layouts, and content patterns.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

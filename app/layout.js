import "./globals.css";

export const metadata = {
  title: "CryptoVault Pro — Intelligent Crypto Trading",
  description: "Earn consistent returns through our AI-powered crypto trading platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

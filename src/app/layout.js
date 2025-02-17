import "./globals.css";

export const metadata = {
  title: "Welcome to ByteOp Corps",
  description: "Serverflex Hackathon Submission 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

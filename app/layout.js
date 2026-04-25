import "./globals.css";

export const metadata = {
  title: "Robert Edits",
  description: "Video editing built for retention, pacing, and YouTube growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

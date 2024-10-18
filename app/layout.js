// app/layout.js

import '../styles/globals.css'; // Ensure this import is present

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

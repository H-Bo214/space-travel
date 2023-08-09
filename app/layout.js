import "./globals.css";
import Header from "./Header/page";

export const metadata = {
  title: "Space Travel",
  description: "Space tourism website",
};
// render the header component within the body tag since it is to be shared throughout the application.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

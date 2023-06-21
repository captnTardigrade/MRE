import "./globals.css";
import { ThemeProvider } from "./theme-provider";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        ></ThemeProvider>
      </body>
    </html>
  );
}

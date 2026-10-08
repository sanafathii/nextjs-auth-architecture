import "./globals.css";
import TopNavigation from "./_components/top-navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased bg-secondary-900 text-sm">
        <TopNavigation />
        {children}
      </body>
    </html>
  );
}

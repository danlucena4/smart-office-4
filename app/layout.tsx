export const metadata = {
  title: "Smart Office 4.0",
  description: "Dashboard para monitorar um app fictício de adoção",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

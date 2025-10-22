import "./globals.css";

export const metadata = {
  title: "Smart Office - Dashboard de Adoção de Animais",
  description: "Dashboard profissional com métricas em tempo real para ONGs de adoção de animais. Monitore adoções, engajamento, operações e muito mais.",
  keywords: ["dashboard", "adoção de animais", "métricas", "analytics", "next.js", "react"],
  authors: [{ name: "Smart Office Team" }],
  creator: "Smart Office",
  publisher: "Smart Office",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://smart-office-dashboard.vercel.app",
    title: "Smart Office - Dashboard de Adoção",
    description: "Dashboard profissional para monitoramento de adoção de animais",
    siteName: "Smart Office Dashboard",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Office - Dashboard de Adoção",
    description: "Dashboard profissional para monitoramento de adoção de animais",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}

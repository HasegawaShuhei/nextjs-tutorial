import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* MEMO: アプリ全体に適用するフォントの設定 [https://nextjs.org/learn/dashboard-app/optimizing-fonts-images#adding-a-primary-font] */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

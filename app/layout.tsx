import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    // templateを利用すると、ページごとに設定したタイトルでoverrideできる。
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

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

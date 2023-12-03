import { Inter, Lusitana } from 'next/font/google';

// プライマリフォント
export const inter = Inter({ subsets: ['latin'] });

// セカンダリフォント
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

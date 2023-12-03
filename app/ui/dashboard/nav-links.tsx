import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          // MEMO: Linkコンポーネントを使って、リンクを作成する。
          // <Link>ブラウザのビューポートにコンポーネントが表示されるたびに、Next.js がリンクされたルートのコードをバックグラウンドで自動的にプリフェッチします。
          // ユーザーがリンクをクリックするまでに、宛先ページのコードはすでにバックグラウンドで読み込まれており、これによりページがほぼ瞬時に遷移します。
          // [https://nextjs.org/learn/dashboard-app/navigating-between-pages#automatic-code-splitting-and-prefetching]
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

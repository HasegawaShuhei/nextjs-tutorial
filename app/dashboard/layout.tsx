import SideNav from '@/app/ui/dashboard/sidenav';

// MEMO: /dashboardは以下のpage.tsxをchildrenとして読み込む。
// Next.js でレイアウトを使用する利点の 1 つは、ナビゲーション時にページ コンポーネントのみが更新され、レイアウトは再レンダリングされないことです。これは部分レンダリングと呼ばれます。
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

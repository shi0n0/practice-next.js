import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Navbar from './navbar';

// フォントの読み込み
const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});


// ページのメタデータ
export const metadata = {
  title: 'Next.js TEST-APP',
  description: 'Test project using Next.js 13.4',
}

// ページのレイアウト
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${NotoSansJP.className} bg-gray-200`}>
      <Navbar />
          <div>this div is shared layout.tsx</div>
          <main>
            {children}
          </main>
      </body>
    </html>
  )
}
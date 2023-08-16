import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

// 1. フォントの読み込み
const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});


// 1. ページのメタデータ
export const metadata = {
  title: 'Next.js TEST-APP',
  description: 'Test project using Next.js 13.4',
}

// 2. ページのレイアウト
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>
          <div>this div is shared layout.tsx</div>
          {children}
      </body>
    </html>
  )
}
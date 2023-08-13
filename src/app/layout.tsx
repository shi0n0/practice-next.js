import './globals.css'

// 1. ページのメタデータ
export const metadata = {
  title: 'Next.js Awesome Memo App',
  description: 'Generated by create next app',
}

// 2. ページのレイアウト
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      {/* 3. ページやレイアウトの内容を表示 */}
      <body>{children}</body>
    </html>
  )
}
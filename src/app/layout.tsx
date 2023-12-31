import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

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
        <div className='text-center mt-10'>
          <h1 className='text-3xl font-bold text-gray-700'>Next.js-13.4 Todo App</h1>
        </div>
          <main className='flex items-top mt-8 justify-center min-h-screen'>
            <div className='w-full max-w-xl mt-5'>
              {children}
            </div>
          </main>
      </body>
    </html>
  )
}
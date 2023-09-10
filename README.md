## Practice-Next.js  
Next.jsの練習用リポジトリです。  
Todoアプリを作成しています。

### TODO  
Next.jsの強みとして画像の処理があるらしいので、Todoアプリに画像などのメディアを絡ませて開発します。  
単純にテキストと一緒に画像アップロードできるようにするつもりです。  

### Stack  
使用言語はNext.js-13.4, CSSはTailwind
使用するデータベースはVercelで操作はPrismaです。 

### 進行  
9/10現在、CRUDのうちCRの部分のみ完成しました。  

### メモ  
tailwindCSSを使用する上で作成されるglobal.cssにてVSCODE上だと"unknown at rule"というエラーが発生しますが、VSCODEの仕様のようでそのまま無視で動くので問題ないようです。

Next.jsの仕様的に画像関連までローカルで完結させようとすると難しいようなので、元の予定通りvercelを使おうと思います。  
ホスティングおよびデータベースとストレージを全てvercelで完結させる予定です。
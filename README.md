# 環境構築
- 参考サイト
  - [りんねどっとねっと, Docker + React + Go API 通信できる環境を構築する, 更新(2023.11.03)](https://rimane.net/docker-react-golang-api/)

## セットアップ
上記の参考サイトに従って開発土壌を作り、随時必要なパッケージをインストールして開発を実施しました。  
現状のパッケージリストは次の通りです。
```
/home/node/app # npm list
app@0.0.0 /home/node/app
+-- @react-pdf-viewer/core@3.12.0
+-- @react-pdf-viewer/default-layout@3.12.0
+-- @react-pdf-viewer/locales@1.0.0
+-- @reduxjs/toolkit@2.0.1
+-- @types/react-dom@18.2.17
+-- @types/react-router-dom@5.3.3
+-- @types/react@18.2.43
+-- @typescript-eslint/eslint-plugin@6.13.2
+-- @typescript-eslint/parser@6.13.2
+-- @vitejs/plugin-react-swc@3.5.0
+-- eslint-plugin-react-hooks@4.6.0
+-- eslint-plugin-react-refresh@0.4.5
+-- eslint@8.55.0
+-- pdfjs-dist@3.4.120
+-- react-dom@18.2.0
+-- react-redux@9.0.3
+-- react-router-dom@6.21.1
+-- react@18.2.0
+-- typescript@5.3.3
`-- vite@5.0.7
```

次のコマンドにて
```
docker compose build
docker compose up -d

docker compose exec <?> ash

// localhotで実行
npm run dev

// パッケージ化してdist内をアップロード
npm run build
```

## 使用する画像やpdfは下記のサイトから
- アイコン画像
  - [Figma](), [GitHub](), [Qiita](),
- [ブラックジャックによろしく]()


# 漫画文字起こし
今回は[[magi:https://github.com/ragavsachdeva/magi]](The Manga Whisperer: Automatically Generating Transcriptions for Comics (CVPR'24))を用いる。
学習済みAIモデルに漫画1ページずつ渡して文字おこしする。

# 読み上げ
VOICEBOX APIにより文字起こしした文章を読み上げる

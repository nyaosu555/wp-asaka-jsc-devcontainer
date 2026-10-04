# 開発環境セットアップ & 開発ガイド

本プロジェクトは **Docker (Dev Containers)** を使用して開発環境を構築しています。  
チーム全員がまったく同じ環境・同じバージョン（PHP / Node.js / VS Code 拡張機能 / フォーマッター設定）で開発を進めることができます。

---

## 📋 前提条件（事前にインストールが必要なもの）

開発を開始する前に、自身の PC に以下をインストールしてください。

1. **[Docker Desktop](https://www.docker.com/products/docker-desktop/)**
2. **[Visual Studio Code](https://code.visualstudio.com/)**
3. **VS Code 拡張機能:** **[Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)**  
   *(※ その他の PHP や Prettier などの拡張機能はコンテナ起動時に自動インストールされるため、事前インストールは不要です)*

---

## 🚀 初回セットアップ手順

1. **リポジトリをクローンする**
   ```bash
   git clone <リポジトリのURL>
   cd <クローンしたフォルダ>
   ```

2. **Docker Desktop を起動する**

3. **VS Code でプロジェクトを開き、コンテナに入る**
   * VS Code でフォルダを開きます。
   * 画面右下に表示される **「Reopen in Container」** ボタンをクリックします。  
     *(表示されない場合は、`Cmd + Shift + P` でコマンドパレットを開き `Dev Containers: Reopen in Container` を選択)*

4. **自動セットアップの完了を待つ**
   * 初回起動時にバックグラウンドで `npm install` や VS Code 拡張機能のインストールが全自動で実行されます。
   * VS Code 左下の緑色アイコンが `Dev Container: ...` と表示されれば準備完了です。

---

## 💻 日々の開発フロー

### 1. 開発サーバー（ビルド & 自動リロード）の起動
VS Code 内のターミナル（`Ctrl + ~`）を開き、コンテナ側で以下を実行します。

```bash
npm run dev
```

* **動作:** Webpack のビルドと BrowserSync による変更監視が始まります。
* **確認用 URL:** **[http://localhost:3000](http://localhost:3000)**  
  *(WordPress 本体は `http://localhost:8082` で動作していますが、ブラウザ自動リロード機能を有効にするため **`3000`** ポートを開いて作業してください)*

### 2. コードの保存と自動整形
* PHP / HTML / JS / CSS のどのファイルを編集しても、**`Cmd + S`（保存）を押すだけで自動整形**されます。
* 保存と同時にブラウザ（`http://localhost:3000`）が自動でリロード・即時反映されます。

---

## 💡 トラブルシューティング（困ったときは）

### Q1. スリープ復帰後、保存時の自動整形（Cmd + S）が効かなくなった
PC のスリープ等でコンテナと VS Code の通信が一時断絶すると、フォーマッターのプロセスがフリーズすることがあります。

* **対処法:**  
  1. `Cmd + Shift + P` を押す
  2. **`Developer: Reload Window`** を選択して実行する（10秒程度で復旧します）

### Q2. ページを変更したのにブラウザが自動更新されない
* **対処法:**  
  コンテナ内のターミナルで **`npm run dev`** が停止していないか確認してください。停止している場合は再度実行します。

### Q3. npm パッケージを追加・変更したい
必ず **コンテナ側のターミナル** でコマンドを実行してください。

```bash
# 例: パッケージの追加
npm install <package-name>
```

---

## 🛠 スクリプト一覧

| コマンド | 内容 |
| :--- | :--- |
| `npm run dev` | Webpack ビルド & BrowserSync による常時監視・自動リロード起動 |
| `npm run format` | プロジェクト内の全ファイル（PHP/JS/CSS/HTML）を一括整形 |
| `npm run lint` | JavaScript のコードチェック |
| `npm run lint:fix` | JavaScript のコード自動修正 |
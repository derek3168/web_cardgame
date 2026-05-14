# 卡牌比賽流程網站

以 [Vite](https://vite.dev/) + [React](https://react.dev/) 建立的單頁賽事說明：首頁含**比賽流程時間軸**、**規則摘要**與**報名／聯絡**按鈕。流程與文案與 UI 分離，改內容時主要編輯 `src/content/` 下檔案即可。

## 本機開發

```bash
npm install
npm run dev
```

## 修改內容

| 檔案 | 用途 |
| --- | --- |
| [src/content/schedule.ts](src/content/schedule.ts) | 各階段標題、日期文字、說明與選填連結 |
| [src/content/site.ts](src/content/site.ts) | 賽事標題、規則條列、報名網址與信箱 |

## 建置

```bash
npm run build
```

產出於 `dist/`，可上傳至任一靜態託管。

## 正式給大家看的網站（上線）

### 方式 A：GitHub Pages（已內建 CI）

1. 在 GitHub **建立新儲存庫**，把本專案 push 到 `main` 或 `master`。  
2. 儲存庫 **Settings → Pages**：**Build and deployment** 的 **Source** 選 **GitHub Actions**（不要選 Deploy from a branch）。  
3. 到 **Actions** 等「Deploy static site to GitHub Pages」跑完（約 1～2 分鐘）。  
4. 再到 **Settings → Pages** 查看 **Visit site** 的網址。  
   - 一般專案庫網址為：`https://<你的帳號>.github.io/<儲存庫名>/`  
   - 若儲存庫名為 `<帳號>.github.io`（使用者首頁站），workflow 會自動用 `base: '/'`，網址為 `https://<帳號>.github.io/`。

建置時會依儲存庫名稱設定 `VITE_BASE_URL`，無須手改 [vite.config.ts](vite.config.ts)。若要改路徑，可在該 workflow 裡調整「計算 Vite base」步驟。

### 方式 B：Vercel / Cloudflare Pages

1. 用 GitHub 登入並 **Import** 此儲存庫。  
2. **Build command**：`npm run build`；**Output directory**：`dist`。  
3. **Root** 部署（自訂網域或 `*.vercel.app`）時，`VITE_BASE_URL` 留空即可（等同 `base: '/'`，[vite.config.ts](vite.config.ts) 已支援）。

## Lint

```bash
npm run lint
```

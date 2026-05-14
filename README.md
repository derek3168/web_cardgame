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

### 方式 A：GitHub Pages

#### 第一次 push（HTTPS + PAT 沒有 `workflow` 權限時）

本倉庫的 Actions 設定檔放在 **[`deploy-github-pages.yml.example`](deploy-github-pages.yml.example)**（不在 `.github/workflows/`，避免 push 被 GitHub 拒絕）。

1. 照平常 `git push` 把程式推上 GitHub。  
2. 在 GitHub 該 repo 頁面：**Add file → Create new file**。  
3. 檔名填：**`.github/workflows/deploy-github-pages.yml`**（含路徑）。  
4. 把本機 [`deploy-github-pages.yml.example`](deploy-github-pages.yml.example) **全文複製貼上** → **Commit changes**（用瀏覽器登入，不依賴 PAT 的 `workflow` scope）。  
5. **Settings → Pages → Source** 選 **GitHub Actions**。  
6. 到 **Actions** 等部署跑完，在 **Settings → Pages** 看 **Visit site**。

一般網址為：`https://<帳號>.github.io/<倉庫名>/`。若倉庫名為 `<帳號>.github.io`，workflow 內會用 `base: '/'`。

若你的 PAT **已勾選 `workflow`（Classic）或 Workflows Read and write（Fine-grained）**，也可把 `deploy-github-pages.yml.example` 複製成 `.github/workflows/deploy-github-pages.yml` 後用 git 推送，不必經網頁貼上。

#### 建置路徑

建置時會依倉庫名稱設定 `VITE_BASE_URL`，無須手改 [vite.config.ts](vite.config.ts)。

### 方式 B：Vercel / Cloudflare Pages

1. 用 GitHub 登入並 **Import** 此儲存庫。  
2. **Build command**：`npm run build`；**Output directory**：`dist`。  
3. **Root** 部署（自訂網域或 `*.vercel.app`）時，`VITE_BASE_URL` 留空即可（等同 `base: '/'`，[vite.config.ts](vite.config.ts) 已支援）。

## Lint

```bash
npm run lint
```

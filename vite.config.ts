import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * 公開網址路徑前綴（結尾須為 /）。
 * - 本機 `npm run dev`：未設定時為 `/`
 * - GitHub Pages「專案站」：CI 會設成 `/儲存庫名/`
 * - 自訂網域或 user.github.io 根站：CI 或本機設為 `/`
 */
function basePath(): string {
  const raw = process.env.VITE_BASE_URL
  if (!raw || raw === '/') return '/'
  const withSlash = raw.startsWith('/') ? raw : `/${raw}`
  return withSlash.endsWith('/') ? withSlash : `${withSlash}/`
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basePath(),
})

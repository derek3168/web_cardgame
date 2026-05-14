/** 單一比賽階段（時間軸節點） */
export type SchedulePhase = {
  id: string
  title: string
  /** 顯示於時間軸上的日期或時段文字，例如「2026-06-01」或「Day 1 上午」 */
  dateLabel: string
  /** 規則或流程重點，一至兩句為宜 */
  description: string
  /** 選填：對外連結（報名細則、場地圖等） */
  link?: {
    href: string
    label: string
  }
}

/** Demo：節點少、好講；正式版再補齊階段與連結 */
export const schedulePhases: SchedulePhase[] = [
  {
    id: 'register',
    title: '報名截止',
    dateLabel: 'D-7 日 23:59',
    description: '線上填表＋繳費，截止後寄確認信。',
  },
  {
    id: 'day',
    title: '正賽日流程',
    dateLabel: '10:00 開場',
    description: '報到 → 淘汰／決賽 → 頒獎。',
  },
  {
    id: 'final',
    title: '頒獎',
    dateLabel: '約 18:00',
    description: '名次公布、合影；實際以現場為準。',
  },
]

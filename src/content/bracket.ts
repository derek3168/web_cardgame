/**
 * 對戰樹／淘汰表資料：編輯隊伍名單即可更新畫面。
 * 單敗：隊伍數會自動補到 2 的冪（不足補「輪空」）。
 */

/** 單敗淘汰隊伍（請改為實際隊名或種子順序） */
export const singleElimDemoTeams: string[] = [
  'Team A',
  'Team B',
  'Team C',
  'Team D',
  'Team E',
  'Team F',
  'Team G',
  'Team H',
]

export type ElimMatchNode = {
  id: string
  teamA: string | null
  teamB: string | null
  children?: [ElimMatchNode, ElimMatchNode]
}

function padToPowerOfTwo(teams: string[]): string[] {
  let cap = 1
  while (cap < teams.length) cap *= 2
  const out = [...teams]
  while (out.length < cap) out.push('輪空')
  return out
}

let elimIdSeq = 0
function nextElimId() {
  return `m${++elimIdSeq}`
}

function buildElimNode(side: string[]): ElimMatchNode {
  if (side.length === 2) {
    return {
      id: nextElimId(),
      teamA: side[0],
      teamB: side[1],
    }
  }
  const mid = side.length / 2
  const left = buildElimNode(side.slice(0, mid))
  const right = buildElimNode(side.slice(mid))
  return {
    id: nextElimId(),
    teamA: null,
    teamB: null,
    children: [left, right],
  }
}

/** 由隊伍列表建立單敗淘汰樹根節點（決賽在樹根） */
export function buildSingleElimTree(teams: string[]): ElimMatchNode {
  if (teams.length < 2) {
    throw new Error('單敗淘汰至少需要 2 隊')
  }
  elimIdSeq = 0
  return buildElimNode(padToPowerOfTwo(teams))
}

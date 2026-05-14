import type { ElimMatchNode } from '../../content/bracket'
import { MatchCard } from './MatchCard'

type Props = {
  root: ElimMatchNode
  /** 雙敗勝部內嵌時使用較小對戰卡 */
  compact?: boolean
}

function Subtree({ node, compact }: { node: ElimMatchNode; compact?: boolean }) {
  if (!node.children) {
    return (
      <div className="elim-subtree elim-subtree--leaf">
        <MatchCard teamA={node.teamA} teamB={node.teamB} compact={compact} />
      </div>
    )
  }

  const [left, right] = node.children

  return (
    <div className="elim-subtree">
      <div className="elim-subtree__upper">
        <Subtree node={left} compact={compact} />
        <Subtree node={right} compact={compact} />
      </div>
      <div className="elim-subtree__join" aria-hidden="true" />
      <div className="elim-subtree__parent">
        <MatchCard teamA={node.teamA} teamB={node.teamB} compact={compact} />
      </div>
    </div>
  )
}

export function SingleEliminationTree({ root, compact }: Props) {
  return (
    <div className={`elim-tree-wrap${compact ? ' elim-tree-wrap--compact' : ''}`}>
      <Subtree node={root} compact={compact} />
    </div>
  )
}

type Props = {
  teamA: string | null
  teamB: string | null
  compact?: boolean
}

export function MatchCard({ teamA, teamB, compact }: Props) {
  const a = teamA ?? '待定'
  const b = teamB ?? '待定'
  return (
    <div
      className={`match-card${compact ? ' match-card--compact' : ''}`}
      role="group"
      aria-label="對戰"
    >
      <div className="match-card__slot">{a}</div>
      <div className="match-card__vs">vs</div>
      <div className="match-card__slot">{b}</div>
    </div>
  )
}

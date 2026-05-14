import type { SchedulePhase } from '../content/schedule'

type Props = {
  phases: SchedulePhase[]
}

export function Timeline({ phases }: Props) {
  return (
    <ol className="timeline" aria-label="比賽流程">
      {phases.map((phase, index) => (
        <li key={phase.id} className="timeline__item">
          <div className="timeline__marker" aria-hidden="true">
            <span className="timeline__dot" />
            {index < phases.length - 1 ? (
              <span className="timeline__rail" />
            ) : null}
          </div>
          <article className="timeline__card">
            <p className="timeline__date">{phase.dateLabel}</p>
            <h3 className="timeline__title">{phase.title}</h3>
            <p className="timeline__desc">{phase.description}</p>
            {phase.link ? (
              <a
                className="timeline__link"
                href={phase.link.href}
                {...(phase.link.href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer noopener' }
                  : {})}
              >
                {phase.link.label}
              </a>
            ) : null}
          </article>
        </li>
      ))}
    </ol>
  )
}

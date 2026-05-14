import { Timeline } from './components/Timeline'
import { SingleEliminationTree } from './components/bracket/SingleEliminationTree'
import { contact, rulesSummary, siteMeta } from './content/site'
import { schedulePhases } from './content/schedule'
import { buildSingleElimTree, singleElimDemoTeams } from './content/bracket'
import './App.css'
import './components/bracket/Bracket.css'

const singleElimRoot = buildSingleElimTree(singleElimDemoTeams)

function App() {
  return (
    <div className="page">
      {siteMeta.isPrototype ? (
        <div className="prototype-bar" role="status">
          <span className="prototype-bar__tag">Prototype</span>
        </div>
      ) : null}
      <header className="hero">
        <h1 className="hero__title">{siteMeta.eventTitle}</h1>
        {siteMeta.subtitle ? (
          <p className="hero__subtitle">{siteMeta.subtitle}</p>
        ) : null}
        {siteMeta.intro ? (
          <p className="hero__intro">{siteMeta.intro}</p>
        ) : null}
        <div className="hero__actions">
          <a
            className="button button--primary"
            href={contact.registrationUrl}
            id="register"
          >
            {contact.registrationLabel}
          </a>
          <a className="button button--ghost" href={`mailto:${contact.email}`}>
            {contact.emailLabel}
          </a>
        </div>
      </header>

      <main>
        <section className="section" aria-labelledby="flow-heading">
          <h2 id="flow-heading" className="section__title">
            比賽流程圖
          </h2>
          <p className="section__lead">
            由左至右為時間先後；手機版面改為由上而下閱讀。
          </p>
          <Timeline phases={schedulePhases} />
        </section>

        <section className="section" aria-labelledby="bracket-heading">
          <h2 id="bracket-heading" className="section__title">
            對戰樹 / 淘汰表
          </h2>
          <SingleEliminationTree root={singleElimRoot} />
        </section>

        <section className="section section--rules" aria-labelledby="rules-heading">
          <h2 id="rules-heading" className="section__title">
            規則摘要
          </h2>
          <ul className="rules-list">
            {rulesSummary.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App

import ProfileCard from './components/ProfileCard'
import PipelineBoard from './components/PipelineBoard'
import MatchScores from './components/MatchScores'
import QuickActions from './components/QuickActions'
import './index.css'
export default function App() {
  return (
    <div className="app">
      <header>
        <h1>⚡ GitHired</h1>
        <p>Career Intelligence System — Mario A. Espindola</p>
      </header>
      <div className="grid">
        <ProfileCard />
        <QuickActions />
        <PipelineBoard />
        <MatchScores />
      </div>
    </div>
  )
}

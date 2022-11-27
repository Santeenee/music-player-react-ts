import Header from './components/Header'
import Player from './components/Player'
import Sidebar from './components/Sidebar'

export default function App(): JSX.Element {
	return (
		<div className="App min-h-screen">
			<Header />
			<Player />
			<Sidebar />
			{/* no footer, 
        everything is in the about page inside navbar */}
		</div>
	)
}

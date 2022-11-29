import { useState } from 'react'
import Header from './components/Header'
import Player from './components/Player'
import Sidebar from './components/Sidebar'

export default function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

	return (
		<div className="App min-h-screen">
			<Header onClick={() => setIsSidebarOpen(open => !open)} />
			<Player />
			<Sidebar isOpen={isSidebarOpen} />
			{/* no footer, 
        everything is in the about page inside navbar */}
		</div>
	)
}

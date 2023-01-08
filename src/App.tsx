import { useEffect, useState } from 'react'

import Header from './components/Header'
import Player from './components/Player'
import Sidebar from './components/Sidebar'

//import data
import musicArr from './assets/music/musicList.json'

export default function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false) //state lifted up
	const [songId, setSongId] = useState<number>(0)

	//what happens when songId changes?
	//useEffect(() => {}, [songId])

	return (
		<div className="App min-h-screen">
			<Header
				isOpen={isSidebarOpen}
				toggleSideBar={() => setIsSidebarOpen(open => !open)}
			/>
			<Player songId={songId} changeSong={setSongId} musicList={musicArr} />
			<Sidebar
				songId={songId}
				changeSong={setSongId}
				musicList={musicArr}
				isOpen={isSidebarOpen}
			/>
		</div>
	)
}

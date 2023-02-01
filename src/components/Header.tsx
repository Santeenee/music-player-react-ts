export default function Header({
	isOpen,
	toggleSideBar,
}: {
	isOpen: boolean
	toggleSideBar: () => void
}) {
	return (
		<header className="h-14 flex flex-row flex-nowrap items-center justify-between px-4 py-3">
			<div className="flex flex-row gap-2">
				<img
					className="w-5 block"
					src="../assets/music-player-icon.svg"
					alt="Music player icon"
				/>
				<h1 className="font-bold text-2xl">Music player</h1>
			</div>
			<button
				onClick={toggleSideBar}
				id="hamburger-menu-button"
				className="z-10 p-1 mt-1 w-12"
			>
				{!isOpen ? (<img
					className="dark:invert"
					src="../assets/hamburger-menu.svg"
					alt="Open menu"
				/>) : (<img
					className="dark:invert"
					src="../assets/close.svg"
					alt="Close menu"
				/>)}
			</button>
		</header>
	)
}

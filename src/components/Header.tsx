export default function Header({
	isOpen,
	toggleSideBar,
}: {
	isOpen: boolean
	toggleSideBar: () => void
}) {
	return (
		<header className="h-14 flex flex-row flex-nowrap items-center justify-between px-4 py-3">
			<h1 className="font-bold text-2xl">Music player</h1>
			<button
				onClick={toggleSideBar}
				id="hamburger-menu-button"
				className="z-10 p-1"
			>
				{!isOpen ? 'Open Sidebar' : 'Close Sidebar'}
			</button>
		</header>
	)
}

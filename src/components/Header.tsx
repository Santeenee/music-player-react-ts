export default function Header() {
	function handleSidebar() {
		let asidePazzo = document.querySelector('#aside-pazzo')

		asidePazzo?.classList.toggle('translate-x-[110%]')
	}

	return (
		<header className="h-10 flex flex-row flex-nowrap items-center justify-between px-4 py-3">
			<h1 className="font-bold text-2xl">Music player</h1>
			<button
				onClick={handleSidebar}
				id="hamburger-menu-button"
				className="z-10 p-1"
			>
				Hamburger
			</button>
		</header>
	)
}

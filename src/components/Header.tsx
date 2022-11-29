export default function Header({ onClick }: { onClick: any }) {
	return (
		<header className="h-10 flex flex-row flex-nowrap items-center justify-between px-4 py-3">
			<h1 className="font-bold text-2xl">Music player</h1>
			<button onClick={onClick} id="hamburger-menu-button" className="z-10 p-1">
				Hamburger
			</button>
		</header>
	)
}

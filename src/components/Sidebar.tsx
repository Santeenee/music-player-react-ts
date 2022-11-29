import classNames from 'classnames'

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
	return (
		<aside
			id="aside-pazzo"
			className={classNames(
				isOpen && 'translate-x-[110%]',
				'metti-la-classe-di-prima transition-transform fixed h-screen w-[15rem] bg-red-100 right-0 bottom-0 top-0 p-4 pt-10 flex flex-col'
			)}
		>
			<ul>
				<li>a</li>
				<li>b</li>
				<li>c</li>
				<li>d</li>
				<li>e</li>
			</ul>
			<a
				href="https://GitHub.com/santeenee"
				className="underline text-orange-700 mt-auto"
			>
				Go to my github repo
			</a>
		</aside>
	)
}

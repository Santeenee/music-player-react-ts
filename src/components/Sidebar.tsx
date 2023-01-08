import { Dispatch, SetStateAction } from 'react'
import classNames from 'classnames'

export default function Sidebar({
	isOpen,
	songId,
	musicList,
	changeSong,
}: {
	isOpen: boolean
	songId: number
	musicList: { [key: string]: any }
	changeSong: Dispatch<SetStateAction<number>>
}) {
	return (
		<aside
			id="aside-pazzo"
			className={classNames(
				!isOpen && 'translate-x-[110%]',
				'transition-transform fixed h-screen w-80 shadow-[0_0_0_3px_orangered] dark:shadow-[none] bg-white dark:bg-red-900 right-0 bottom-0 top-0 p-4 pt-14 flex flex-col overflow-y-auto'
			)}
		>
			<ul className="grid gap-[1rem]">
				{musicList.map(
					(
						item: { thumbnail: string; name: string; author: string },
						index: number
					) => (
						<li key={index.toString()}>
							<button
								onClick={() => changeSong(index)}
								className="grid grid-cols-[5rem_1fr] grid-rows-[1fr_1fr] gap-[0.25rem_0.85rem] w-full"
							>
								<img
									className={classNames(
										index === songId &&
											'outline outline-2 outline-offset-[2.5px] outline-black dark:outline-white',
										'col-[1/2] row-[1/3] rounded'
									)}
									src={item.thumbnail}
									alt="song thumbnail"
								/>
								<h3 className="col-[2/3] row-[1/2] self-end justify-self-start">
									{item.name}
								</h3>
								<em className="col-[2/3] row-[2/3] self-start justify-self-start">
									{item.author}
								</em>
							</button>
						</li>
					)
				)}
			</ul>
			<a
				href="https://GitHub.com/Santeenee/music-player-react-ts"
				className="underline text-orange-800 dark:text-orange-300 mt-auto"
			>
				Go to my github repo
			</a>
		</aside>
	)
}

import { Dispatch, SetStateAction } from 'react'
import MusicControls from './MusicControls'

export default function Player({
	musicList,
	songId,
	setSongId,
}: {
	musicList: { [key: string]: any }
	songId: number
	setSongId: Dispatch<SetStateAction<number>>
}) {
	return (
		<main className="overflow-y-auto player p-6 flex flex-col flex-nowrap items-center justify-center w-full sm:w-fit sm:mx-auto h-[calc(100vh-3.5rem)]">
			{/* Thumbnail */}
			<div className="rounded-[0.4rem] ring ring-orange-600 dark:ring-white overflow-hidden w-[10rem] aspect-square bg-gray-700">
				<img
					className="w-full block"
					src={musicList[songId].thumbnail}
					alt="Song Thumbnail"
				/>
			</div>

			{/* Song name and Author */}
			<div className="name-and-author mt-8 mb-16 text-center">
				<p className="current-music-title font-bold text-xl">
					{musicList[songId].name}
				</p>
				<p className="current-music-author">{musicList[songId].author}</p>
			</div>

			<MusicControls
				songId={songId}
				setSongId={setSongId}
				musicList={musicList}
			/>
		</main>
	)
}

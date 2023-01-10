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
		<main className="overflow-y-auto player p-6 flex flex-col flex-nowrap items-center justify-center max-w-fit mx-auto h-[calc(100vh_-_3.5rem)]">
			{/* Thumbnail */}
			<div className="thumbnail-song rounded-[0.4rem] outline-black dark:outline-[orangered] outline outline-2 outline-offset-4 overflow-hidden w-[10rem] aspect-square bg-gray-700">
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
				<p className="current-music-author italic">
					{musicList[songId].author}
				</p>
			</div>

			<MusicControls
				songId={songId}
				setSongId={setSongId}
				musicList={musicList}
			/>
		</main>
	)
}

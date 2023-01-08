import { Dispatch, SetStateAction } from 'react'
import MusicControls from './MusicControls'

export default function Player({
	songId,
	changeSong,
	musicList,
}: {
	songId: number
	changeSong: Dispatch<SetStateAction<number>>
	musicList: { [key: string]: any }
}) {
	return (
		<main className="overflow-y-auto player p-6 flex flex-col flex-nowrap items-center justify-center max-w-fit mx-auto h-[calc(100vh_-_2.5rem)]">
			{/* Thumbnail */}
			<div className="thumbnail-song rounded-[0.4rem] outline-black dark:outline-white outline outline-2 outline-offset-4 overflow-hidden w-[10rem] aspect-square bg-gray-700">
				<img
					className="w-full block"
					src={musicList[songId].thumbnail}
					alt="Song Thumbnail"
				/>
			</div>

			{/* Song name and Author */}
			<div className="name-and-author my-20 text-center">
				<p className="current-music-title font-bold text-xl">
					{musicList[songId].name}
				</p>
				<p className="current-music-author italic">
					{musicList[songId].author}
				</p>
			</div>

			<MusicControls
				songId={songId}
				changeSong={changeSong}
				musicList={musicList}
			/>
		</main>
	)
}

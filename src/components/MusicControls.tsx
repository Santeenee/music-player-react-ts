import { Dispatch, SetStateAction } from 'react'

export default function MusicControls({
	songId,
	changeSong,
	musicList,
}: {
	songId: number
	changeSong: Dispatch<SetStateAction<number>>
	musicList: { [key: string]: any }
}) {
	function goToPreviousSong(song: number) {}
	function playPause() {}
	function goToNextSong(song: number) {}

	return (
		<div className="controls-container mt-10">
			<div className="flex flex-row flex-nowrap gap-3 items-center justify-center mb-2">
				<div className="time-played">0:00</div>
				<div className="progress-bar">
					<input
						type="range"
						name="song-progress-bar"
						id="song-progress-bar"
						className="accent-color-red accent-[orangered]"
					/>
				</div>
				<div className="time-not-played">3:33</div>
			</div>

			<div className="controls flex flex-nowrap justify-between items-center dark:invert">
				{/* PREVIOUS */}
				<button
					onClick={changeSong(songId => songId - 1)}
					className="p-1 hover:shadow rounded-full aspect-square"
				>
					<img
						className="w-10 m-0"
						src="/src/assets/skip_previous.svg"
						alt="Go to previous song"
					/>
				</button>

				{/* PLAY / PAUSE */}
				<button className="p-1 box-content shadow rounded-full transition-transform hover:scale-110 hover:transition-transform active:shadow-sm">
					<img
						className="w-16 "
						src="/src/assets/play_pause.svg"
						alt="play/pause current song"
					/>
				</button>

				{/* NEXT */}
				<button
					// onClick={changeSong(songId => songId + 1)}
					className="p-1 hover:shadow rounded-full aspect-square"
				>
					<img
						className="w-10"
						src="/src/assets/skip_next.svg"
						alt="Go to next song"
					/>
				</button>
			</div>
		</div>
	)
}

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

export default function MusicControls({
	songId,
	changeSong,
	musicList,
}: {
	musicList: { [key: string]: any }
	songId: number
	changeSong: Dispatch<SetStateAction<number>>
}) {
	const [playing, setPlaying] = useState<boolean>(false)

	const audio = useRef(new Audio(musicList[songId].audioSrc))

	function goToPreviousSong() {
		const listLength: number = musicList.length
		return songId === 0 ? (songId = listLength - 1) : --songId
	}

	function goToNextSong() {
		const listLength: number = musicList.length
		return songId === listLength - 1 ? (songId = 0) : ++songId
	}

	function playPause() {
		if (audio.current.paused) {
			audio.current.play()
		} else {
			audio.current.pause()
		}

		return () => !playing
	}

	function readableTime(seconds: number) {
		//* from ss.xxxxxx to mm:ss
		return new Date(~~seconds * 1000).toISOString().substring(14, 19)
	}

	//!doesn't work
	function readableTimeEverySec(seconds: number) {
		setInterval(() => {
			//* from ss.xxxxxx to mm:ss
			return new Date(~~seconds * 1000).toISOString().substring(14, 19)
		}, 1000)
		return ''
	}

	useEffect(() => {
		audio.current.pause()

		audio.current = new Audio(musicList[songId].audioSrc)
		if (playing) {
			audio.current.play()
		}
	}, [songId])

	return (
		<div className="controls-container mt-10">
			<div className="flex flex-row flex-nowrap gap-3 items-center justify-center mb-2">
				<div className="time-played w-10">
					{playing
						? readableTimeEverySec(audio.current.currentTime)
						: readableTime(audio.current.currentTime)}
				</div>
				<div className="progress-bar-container h-2 basis-40 w-[10rem] bg-white rounded-full overflow-hidden">
					<div className="progress-bar bg-[orangered] w-0"></div>
				</div>
				<div className="time-not-played w-10">
					{readableTime(audio.current.duration)}
				</div>
			</div>

			<div className="controls flex flex-nowrap justify-between items-center dark:invert">
				{/* PREVIOUS */}
				<button
					onClick={() => changeSong(goToPreviousSong())}
					className="p-1 hover:shadow rounded-full aspect-square"
				>
					<img
						className="w-10 m-0"
						src="/src/assets/skip_previous.svg"
						alt="Go to previous song"
					/>
				</button>

				{/* PLAY / PAUSE */}
				<button
					onClick={() => setPlaying(playPause())}
					className="p-1 box-content shadow rounded-full transition-transform hover:scale-110 hover:transition-transform active:shadow-sm"
				>
					<img
						className="w-16 "
						src="/src/assets/play_pause.svg"
						alt="play/pause current song"
					/>
				</button>

				{/* NEXT */}
				<button
					onClick={() => changeSong(goToNextSong())}
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

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import ProgressBar from './ProgressBar'

export default function MusicControls({
	songId,
	setSongId,
	musicList,
}: {
	musicList: { [key: string]: any }
	songId: number
	setSongId: Dispatch<SetStateAction<number>>
}) {
	const [playing, setPlaying] = useState<boolean>(false)

	const audio = useRef(new Audio(musicList[songId].audioSrc))

	function priorSong(): number {
		const listLength: number = musicList.length
		return songId === 0 ? (songId = listLength - 1) : --songId
	}

	function skipSong(): number {
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

	//when switching between songs:
	useEffect(() => {
		audio.current.pause()
		audio.current = new Audio(musicList[songId].audioSrc)

		if (playing) {
			audio.current.play()
		}
	}, [songId])

	return (
		<div className="controls-container mt-10 min-w-[70dvw]">
			<ProgressBar
				audio={audio}
				playing={playing}
				skipSong={skipSong}
				setSongId={setSongId}
				songId={songId}
			/>

			{/* BUTTONS */}
			<div className="controls flex flex-nowrap justify-around items-center dark:invert">
				{/* PREVIOUS */}
				<button
					onClick={() => setSongId(priorSong())}
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
					onClick={() => setSongId(skipSong())}
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

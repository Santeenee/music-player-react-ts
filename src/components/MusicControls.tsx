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
	const audio = useRef(new Audio(musicList[songId].audioSrc))

	const [playing, setPlaying] = useState<boolean>(false)
	const [currTime, setCurrTime] = useState<number>(
		audio.current.currentTime || 0
	)

	function priorSong(): number {
		const listLength: number = musicList.length

		// if seconds are 4 or more, return to song start instead of going to the previous song
		if (currTime > 4) {
			setCurrTime(0)
			audio.current.currentTime = 0
			return songId
		}

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

		// when switching songs, set current time to 0
		setCurrTime(0)

		if (playing) {
			audio.current.play()
		}
	}, [songId])

	return (
		<div className="controls-container mt-10 w-full sm:w-[70vw]">
			<ProgressBar
				songId={songId}
				audio={audio}
				playing={playing}
				currTime={currTime}
				setCurrTime={setCurrTime}
				skipSong={skipSong}
				setSongId={setSongId}
			/>

			{/* BUTTONS */}
			<div className="flex flex-nowrap justify-around items-center">
				{
					// * PREVIOUS
				}
				<button
					onClick={() => setSongId(priorSong())}
					className="p-1 rounded-full aspect-square hover:invert-[0.2]"
				>
					<img
						className="w-10 m-0 dark:invert"
						src="../assets/skip_previous.svg"
						alt="Go to previous song"
					/>
				</button>

				{
					// * PLAY / PAUSE
				}
				<button
					onClick={() => setPlaying(playPause())}
					className="p-2 rounded-full bg-orange-700 transition-transform hover:scale-110"
				>
					{playing ? (
						<img
							className="w-11 invert"
							src="../assets/pause.svg"
							alt="pause current song"
						/>
					) : (
						<img
							className="w-11 invert"
							src="../assets/play.svg"
							alt="play current song"
						/>
					)}
				</button>

				{
					//* NEXT
				}
				<button
					onClick={() => setSongId(skipSong())}
					className="p-1 rounded-full aspect-square hover:invert-[0.2]"
				>
					<img
						className="w-10 dark:invert"
						src="../assets/skip_next.svg"
						alt="Go to next song"
					/>
				</button>
			</div>
		</div>
	)
}

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export default function ProgressBar({
	audio,
	playing,
	skipSong,
	setSongId,
	songId,
}: {
	audio: any
	playing: boolean
	skipSong: () => number
	setSongId: Dispatch<SetStateAction<number>>
	songId: number
}) {
	const [currTime, setCurrTime] = useState<number>(
		audio.current.currentTime || 0
	)

	function readableTime(seconds: number) {
		//* from sss.xxxxxx to mm:ss
		const intSeconds: number = !isNaN(Math.round(seconds))
			? Math.round(seconds)
			: ~~seconds
		return new Date(intSeconds * 1000).toISOString().substring(14, 19)
	}

	useEffect(() => {
		//plays the next song after the current one is done
		if (playing) {
			const songEnd = audio.current.duration
			if (currTime === songEnd) setSongId(skipSong())
		}

		//update current time and progressbar mm:ss every second
		let everySecondInterval: any
		if (playing) {
			everySecondInterval = setInterval(() => {
				return setCurrTime(audio.current.currentTime)
			}, 1000)
		} else {
			setCurrTime(audio.current.currentTime)
			clearInterval(everySecondInterval)
		}
		return () => clearInterval(everySecondInterval)
	}, [playing, currTime])

	// when switching songs, set current time to 0
	useEffect(() => {
		setCurrTime(0)
	}, [songId])

	return (
		<div className="flex flex-row flex-nowrap gap-3 items-center justify-center mb-4">
			<div className="time-played w-10">{readableTime(currTime)}</div>

			<input
				onChange={(e: any) => {
					audio.current.currentTime = e.target?.value
					setCurrTime(audio.current.currentTime)
				}}
				className="basis-60 grow w-[10rem] accent-orange-800 dark:accent-orange-600 rounded-full mt-[2px]"
				type="range"
				// defaultValue={currTime || 0}
				value={currTime || 0}
				min={0}
				max={audio.current.duration || 200}
				name="input-progress-bar"
				id="input-progress-bar"
			/>

			<div className="time-not-played w-10">
				{readableTime(audio.current.duration)}
			</div>
		</div>
	)
}

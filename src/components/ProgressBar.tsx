import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export default function ProgressBar({
	audio,
	playing,
	skipSong,
	setSongId,
	musicList,
	songId,
}: {
	audio: any
	playing: boolean
	skipSong: () => number
	setSongId: Dispatch<SetStateAction<number>>
	musicList: { [key: string]: any }
	songId: number
}) {
	const [currTime, setCurrTime] = useState<number>(
		audio.current.currentTime || 0
	)

	function readableTime(seconds: number) {
		//* from sss.xxxxxx to mm:ss
		return new Date(~~seconds * 1000).toISOString().substring(14, 19)
	}

	function calcProgressBar(value: number) {
		//* return percentage to use in CSS with transform = translateX() function
		let visibleProgressBar = document.querySelector(
			'#visible-progress-bar'
		) as HTMLElement
		let percentage = (100 * value) / Number(audio.current.duration)
		visibleProgressBar.style.transform = `translateX(${percentage + 0.4}%)`
	}

	useEffect(() => {
		//plays the next song after this one is done
		if (currTime === audio.current.duration) setSongId(skipSong())

		//update current time and progressbar mm:ss every second
		let everySecondInterval: any
		let inputProgressBar = document.querySelector(
			'#input-progress-bar'
		) as HTMLInputElement
		if (playing) {
			everySecondInterval = setInterval(() => {
				inputProgressBar.value = currTime.toString()
				calcProgressBar(Number(inputProgressBar.value))
				return setCurrTime(audio.current.currentTime)
			}, 1000)
		} else {
			setCurrTime(audio.current.currentTime)
			clearInterval(everySecondInterval)
		}
		return () => clearInterval(everySecondInterval)
	}, [playing, currTime])

	return (
		<div className="flex flex-row flex-nowrap gap-3 items-center justify-center mb-4">
			<div className="time-played w-10">{readableTime(currTime)}</div>

			<div className="progress-bar-container h-2 basis-60 grow w-[10rem] bg-white rounded-full overflow-hidden relative">
				{/* visible progress bar */}
				<div
					id="visible-progress-bar"
					className="bg-[orangered] w-full h-full absolute top-0 -left-full z-10"
				></div>

				{/* update input when song is playing */}
				<input
					onInput={(e: any) => {
						audio.current.currentTime = e.target?.value
						setCurrTime(audio.current.currentTime)
						calcProgressBar(e.target?.value)
					}}
					className="w-full bg-transparent appearance-none py-2"
					type="range"
					defaultValue={0}
					min={0}
					max={audio.current.duration || 200}
					name="input-progress-bar"
					id="input-progress-bar"
				/>
			</div>

			<div className="time-not-played w-10">
				{readableTime(audio.current.duration)}
			</div>
		</div>
	)
}

export default function MusicControls() {
	return (
		<div className="controls-container mt-10">
			<div className="flex flex-row flex-nowrap gap-3 items-center justify-center mb-2">
				<div className="time-played">0:00</div>
				<div className="progress-bar">
					<input type="range" name="" id="" />
				</div>
				<div className="time-not-played">3:33</div>
			</div>

			<div className="controls flex flex-nowrap justify-between items-center">
				<button className="rounded-full hover:shadow">
					<img
						className="w-10 m-0"
						src="/src/assets/skip_previous.svg"
						alt="Go to previous song"
					/>
				</button>
				<button className="p-1 box-content shadow rounded-full hover:scale-110 hover:transition-transform transition-transform active:shadow-sm">
					<img
						className="w-16 "
						src="/src/assets/play_pause.svg"
						alt="play/pause current song"
					/>
				</button>
				<button className="p-1 hover:shadow rounded-full aspect-square">
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

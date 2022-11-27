import MusicControls from './MusicControls'

export default function Player() {
	return (
		<main className="player p-6 flex flex-col flex-nowrap items-center justify-center max-w-fit mx-auto h-[calc(100vh_-_2.5rem)]">
			<div className="current-music-image rounded-full w-48 h-48 aspect-square bg-red-700"></div>

			<div className="name-and-author my-20 text-center">
				<p className="current-music-title font-bold text-xl">L'Avvelenata</p>
				<p className="current-music-author italic">Francesco Guccini</p>
			</div>

			<MusicControls />
		</main>
	)
}

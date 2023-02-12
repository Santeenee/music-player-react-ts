import { Dispatch, SetStateAction } from "react";
import MusicControls from "./MusicControls";

export default function Player({
  musicList,
  songId,
  setSongId,
}: {
  musicList: { [key: string]: any };
  songId: number;
  setSongId: Dispatch<SetStateAction<number>>;
}) {
  return (
    <main className="player flex h-[calc(100vh-3.5rem)] w-full flex-col flex-nowrap items-center justify-center overflow-y-auto p-6 sm:mx-auto sm:w-fit">
      {/* Thumbnail */}
      <div className="aspect-square w-[10rem] overflow-hidden rounded-[0.4rem] bg-gray-700">
        <img
          className="block w-full"
          src={musicList[songId].thumbnail}
          alt="Song Thumbnail"
        />
      </div>

      {/* Song name and Author */}
      <div className="name-and-author mt-8 mb-16 text-center">
        <p className="current-music-title text-xl font-bold">
          {musicList[songId].name}
        </p>
        <p className="current-music-author">{musicList[songId].author}</p>
      </div>

      <MusicControls
        songId={songId}
        setSongId={setSongId}
        musicList={musicList}
      />
    </main>
  );
}

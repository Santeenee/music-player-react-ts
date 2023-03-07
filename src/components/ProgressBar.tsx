import { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";

export default function ProgressBar({
  audio,
  playing,
  skipSong,
  setSongId,
  songId,
  currTime,
  setCurrTime,
}: {
  audio: MutableRefObject<HTMLAudioElement>;
  playing: boolean;
  skipSong: () => number;
  setSongId: Dispatch<SetStateAction<number>>;
  songId: number;
  currTime: number;
  setCurrTime: Dispatch<SetStateAction<number>>;
}) {
  function readableTime(seconds: number) {
    //* from sss.xxxxxx to mm:ss
    const intSeconds: number = !isNaN(Math.round(seconds))
      ? Math.round(seconds)
      : ~~seconds;
    return new Date(intSeconds * 1000).toISOString().substring(14, 19);
  }

  useEffect(() => {
    //plays the next song after the current one is done
    if (playing && audio.current.ended) {
      setSongId(skipSong());
    }

    //update current time and progressbar mm:ss every second
    let everySecondInterval: any;
    if (playing) {
      everySecondInterval = setInterval(() => {
        return setCurrTime(audio.current.currentTime);
      }, 1000);
    } else {
      setCurrTime(audio.current.currentTime);
      clearInterval(everySecondInterval);
    }
    return () => clearInterval(everySecondInterval);
  }, [playing, currTime]);

  return (
    <div className="mb-4 flex flex-row flex-nowrap items-center justify-center gap-3">
      <div className="time-played w-10">{readableTime(currTime)}</div>

      <input
        onChange={(e: any) => {
          audio.current.currentTime = e.target?.value || 0;
          setCurrTime(e.target?.value || 0);
        }}
        className="mt-[2px] w-[10rem] grow basis-60 rounded-full accent-orange-800 dark:accent-orange-600"
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
  );
}

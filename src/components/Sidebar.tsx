import { Dispatch, SetStateAction } from "react";
import classNames from "classnames";

export default function Sidebar({
  isOpen,
  songId,
  musicList,
  setSongId,
}: {
  isOpen: boolean;
  songId: number;
  musicList: { [key: string]: any };
  setSongId: Dispatch<SetStateAction<number>>;
}) {
  return (
    <aside
      id="aside-pazzo"
      className={classNames(
        !isOpen && "translate-x-[110%]",
        "height-full fixed right-0 bottom-0 top-0 flex w-80 flex-col justify-between overflow-y-auto bg-white p-4 pt-14 shadow-[0_0_0_3px_orangered] transition-transform dark:bg-red-900 dark:shadow-[none]"
      )}
    >
      <ul className="grid gap-4">
        <h3 className="text-xl font-bold">Choose a song</h3>
        {musicList.map(
          (
            item: {
              thumbnail: string;
              name: string;
              author: string;
              audioSrc: string;
            },
            index: number
          ) => {
            //if the audio source doesn't start with 'https://' in musicList.json the element is not rendered
            if (item.audioSrc.startsWith("https://")) {
              return (
                <li key={index.toString()} className="hover:brightness-125">
                  <button
                    onClick={() => setSongId(index)}
                    className="grid w-full grid-cols-[5rem_1fr] grid-rows-[1fr_1fr] gap-[0.25rem_0.85rem]"
                  >
                    <img
                      className={classNames(
                        index === songId &&
                          "ring ring-orange-700 dark:ring-white",
                        "col-[1/2] row-[1/3] rounded"
                      )}
                      src={item.thumbnail}
                      alt="song thumbnail"
                    />
                    <h3 className="col-[2/3] row-[1/2] self-end justify-self-start">
                      {item.name}
                    </h3>
                    <em className="col-[2/3] row-[2/3] self-start justify-self-start">
                      {item.author}
                    </em>
                  </button>
                </li>
              );
            }
          }
        )}
      </ul>
      <footer className="direction flex flex-col">
        <a href="https://chillhop.com/" className="py-4">
          Music by&nbsp;
          <img
            src="https://chillhop.com/wp-content/themes/chillhop/assets/images/Chillhop_white.svg"
            alt="Chillhop logo"
            className="inline-block w-16 invert dark:invert-0"
          />
        </a>
        <a
          href="https://GitHub.com/Santeenee/music-player-react-ts"
          className=" bg-black py-2 text-center text-white underline dark:bg-white dark:text-black"
        >
          Go to the GitHub repo
        </a>
      </footer>
    </aside>
  );
}

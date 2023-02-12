export default function Header({
  isOpen,
  toggleSideBar,
}: {
  isOpen: boolean;
  toggleSideBar: () => void;
}) {
  return (
    <header className="flex h-14 flex-row flex-nowrap items-center justify-between px-4 py-3">
      <div className="flex flex-row gap-2">
        <img
          className="w-5"
          src="../assets/music-player-icon.svg"
          alt="Music player icon"
        />
        <h1 className="text-2xl font-bold">Music player</h1>
      </div>
      <button
        onClick={toggleSideBar}
        id="hamburger-menu-button"
        className="z-10 mt-1 w-12 p-1"
      >
        {!isOpen ? (
          <img
            className="dark:invert"
            src="../assets/hamburger-menu.svg"
            alt="Open menu"
          />
        ) : (
          <img
            className="dark:invert"
            src="../assets/close.svg"
            alt="Close menu"
          />
        )}
      </button>
    </header>
  );
}

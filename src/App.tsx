import { useState } from "react";

import Header from "./components/Header";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

//import data
import musicArr from "./assets/musicList.json";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [songId, setSongId] = useState<number>(0);

  return (
    <div className="App height-full">
      <Header
        isOpen={isSidebarOpen}
        toggleSideBar={() => setIsSidebarOpen((open) => !open)}
      />
      <Player songId={songId} setSongId={setSongId} musicList={musicArr} />
      <Sidebar
        songId={songId}
        setSongId={setSongId}
        musicList={musicArr}
        isOpen={isSidebarOpen}
      />
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import Home from "./Page/Home";
import { linkMusic } from "./assets";
import AlertDialog from "./components/AlertDialog";

function App() {
  const [open, setOpen] = useState(true)
  const audioRef = useRef(null);
    const handlePlayMusic=()=>{
      audioRef.current.play();
      setOpen(false);
    }

  return (
    <div class="app h-screen w-screen bg-[rgb(245,245,250)] max-w-[1280px] mx-auto overflow-hidden">
            
      <audio ref={audioRef}   >
      <source src={linkMusic}     type="audio/mpeg" />
      </audio>
      <AlertDialog open={open} setOpen={setOpen} handlePlayMusic={handlePlayMusic}/>
      <Home />
    </div>
  );
}

export default App;

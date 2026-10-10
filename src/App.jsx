import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SafetyHub from "./pages/SafetyHub";
import MeetByte from "./components/MeetByte";
import ParentsTeachers from "./pages/ParentsTeachers";
import About from "./pages/About";
import Play from "./pages/Play";
import ByteCursor from "./components/ByteCursor";

import Level01 from "./pages/Level01";
import Level02 from "./pages/Level02";
import Level03 from "./pages/Level03";
import Level04 from "./pages/Level04";
import Level05 from "./pages/Level05";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  
return (
  <BrowserRouter>
    <Navbar />

    <ByteCursor />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/safety-hub" element={<SafetyHub />} />
      <Route path="/meet-byte" element={<MeetByte />} />
      <Route
        path="/parents-teachers"
        element={<ParentsTeachers />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/play" element={<Play />} />
      <Route path="/level-01" element={<Level01 />} />
      <Route path="/level-02" element={<Level02 />} />
      <Route path="/level-03" element={<Level03 />} />
      <Route path="/level-04" element={<Level04 />} />
      <Route path="/level-05" element={<Level05 />} />
    </Routes>
  </BrowserRouter>
);

}

export default App;

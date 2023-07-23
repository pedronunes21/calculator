import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { Overlay } from "./components/Overlay";
import { usePlay } from "./contexts/Play";
import { useMemo } from "react";
import { About } from "./components/About";
import { Tests } from "./components/Tests";
// 22:50
function App() {
  const { play, end } = usePlay();

  const effects = useMemo(
    () => (
      <EffectComposer>
        <Noise opacity={0.1} />
      </EffectComposer>
    ),
    []
  );

  return (
    <>
      <Canvas>
        {/* <color attach="background" args={["#ececec"]} />
        <ScrollControls
          pages={play && !end ? 20 : 0}
          damping={0.5}
          style={{
            top: "10px",
            left: "0",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
          }}
        >
          {effects}
          <Experience />
        </ScrollControls> */}

        <Tests />
      </Canvas>
      {/* <div className="test-overlay">
        <h1>Título</h1>
      </div>

      <div className="section2">
        <h1>Título</h1>
      </div> */}
      {/* <Overlay /> */}
    </>
  );
}

export default App;

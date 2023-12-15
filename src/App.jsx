import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";

const App = () => {
  return (
    <Canvas shadows camera={{ fov: 42, position: [0, 0, 8] }}>
      <color attach="bacground" args={["#171720"]} />
      <fog attach="fog" args={["#171720", 8, 30]}/>
      <Suspense>
        <Experience />
      </Suspense>
      <EffectComposer>
        <Bloom mipmapBlur intensity={1.2} />
      </EffectComposer>
    </Canvas>
  );
};

export default App;

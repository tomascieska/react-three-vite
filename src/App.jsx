import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

const App = () => {
  return (
    <Canvas shadows camera={{ fov: 42, position: [0, 0, 8] }}>
      <color attach="bacground" args={["#171720"]} />
      <fog attach="fog" args={["#171720", 8, 30]}/>
      <Experience />
    </Canvas>
  );
};

export default App;

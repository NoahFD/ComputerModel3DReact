import { Canvas } from "@react-three/fiber";
import "@/App.css";
import Scene from "@/components/Scene.jsx";
import { useDispatch } from "react-redux";
import { start, zoom } from "@/redux/slice";

const App = () => {
  const dispatch = useDispatch();

  const handleStartClick = () => {
    dispatch(start());
    dispatch(zoom());
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 10, 0], fov: 55 }} shadows>
        <Scene handleStartClick={handleStartClick} />
      </Canvas>
    </div>
  );
};

export default App;

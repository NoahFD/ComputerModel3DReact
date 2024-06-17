import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "@/App.css";
import { ComputerModel } from "./components/ComputerModel.jsx";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import WelcomeHtml from "./components/WelcomeHtml.jsx";
import ChatBot from "./components/ChatBot.jsx";

function SpotAndPointLightComponent({ spotLightProps, pointLightProps }) {
  const spotLightRef = useRef();
  const pointLightRef = useRef();
  const [helper, setHelper] = useState(null);

  const { scene } = useThree();

  useEffect(() => {
    if (spotLightRef.current) {
      const helper = new THREE.SpotLightHelper(spotLightRef.current);
      // setHelper(helper);
      // scene.add(helper);
      return () => {
        scene.remove(helper);
      };
    }
  }, [scene]);

  useFrame(() => {
    if (spotLightRef.current) {
      spotLightRef.current.target.position.set(0, 0, 0); // Make the spotlight target the center
      if (helper) {
        helper.update();
      }
    }
  });

  return (
    <group>
      <spotLight ref={spotLightRef} {...spotLightProps} />
      {helper && <primitive object={helper} />}
      <pointLight ref={pointLightRef} {...pointLightProps} />
    </group>
  );
}

function App() {
  const [showChatBot, setShowChatBot] = useState(false);

  const handleStartClick = () => {
    setShowChatBot(true);
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }} shadows dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[10, 10, 10]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* First Light Combination */}
        <SpotAndPointLightComponent
          spotLightProps={{
            position: [-5.5779, 0, 13.835],
            angle: Math.PI / 4,
            penumbra: 0.5,
            intensity: 15,
            distance: 50,
            color: "#00FFFF",
            castShadow: true,
          }}
          pointLightProps={{
            position: [-5.5779, 0, 13.835],
            intensity: 50,
            color: "#00FFFF",
          }}
        />

        {/* Second Light Combination */}
        <SpotAndPointLightComponent
          spotLightProps={{
            position: [-7.7944, 8.4728, 8.0389],
            angle: Math.PI / 4,
            penumbra: 0.5,
            intensity: 100,
            distance: 30,
            color: "#fa6710",
            castShadow: true,
          }}
          pointLightProps={{
            position: [-7.7944, 8.4728, 8.0389],
            intensity: 100,
            color: "#fa6710",
          }}
        />

        <Suspense fallback={null}>
          <ComputerModel
            HtmlContent={
              showChatBot ? (
                <ChatBot />
              ) : (
                <WelcomeHtml onStart={handleStartClick} />
              )
            }
            htmlScale={showChatBot ? [0.3, 0.3, 0.8] : [0.3, 0.3, 0.8]}
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;

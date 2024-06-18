import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "@/App.css";
import { ComputerModel } from "@/components/ComputerModel.jsx";
import { Environment, OrbitControls } from "@react-three/drei";
import { useThree } from "react-three-fiber";
import * as THREE from "three";
import WelcomeHtml from "@/components/WelcomeHtml.jsx";
import ChatBot from "@/components/ChatBot.jsx";

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

  return (
    <group>
      <spotLight ref={spotLightRef} {...spotLightProps} />
      {helper && <primitive object={helper} />}
      <pointLight ref={pointLightRef} {...pointLightProps} />
    </group>
  );
}

export default function Scene({ showChatBot, handleStartClick }) {
  const controlsRef = useRef();
  const screenRef = useRef();
  const { camera } = useThree();
  useEffect(() => {
    if (screenRef.current && controlsRef.current) {
      const box = new THREE.Box3().setFromObject(screenRef.current);
      const center = box.getCenter(new THREE.Vector3());

      // Set initial camera position and target
      camera.position.set(center.x, center.y, center.z + 100);
      controlsRef.current.target.set(center.x, center.y, center.z);
    }
  }, [camera]);

  const handleInteractionStart = () => {
    if (controlsRef.current) {
      controlsRef.current.enabled = false;
    }
  };

  const handleInteractionEnd = () => {
    if (controlsRef.current) {
      controlsRef.current.enabled = true;
    }
  };

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[16 * 5, 10 * 5, 4]}
        intensity={1.3}
        // shadow-mapSize-width={1024}
        // shadow-mapSize-height={1024}
        // shadow-camera-far={50 * 8}
        // shadow-camera-left={-10}
        // shadow-camera-right={10}
        // shadow-camera-top={10}
        // shadow-camera-bottom={-10}
      />
      {/*<pointLight position={[-10, -10, -10]} intensity={0.3} />*/}
      <Environment preset="night" />
      {/* First Light Combination */}
      <SpotAndPointLightComponent
        spotLightProps={{
          position: [-5.5779 * 5, 0, 13.835 * 5],
          angle: Math.PI / 4,
          penumbra: 0.5,
          intensity: 15 * 5,
          distance: 50,
          color: "#00FFFF",
          castShadow: true,
        }}
        pointLightProps={{
          position: [-5.5779 * 5, 0, 13.835 * 5],
          intensity: 1000,
          color: "#00FFFF",
        }}
      />

      {/* Second Light Combination */}
      <SpotAndPointLightComponent
        spotLightProps={{
          position: [-7.7944 * 10, 8.4728 * 10, 8.0389 * 10],
          angle: Math.PI / 4,
          penumbra: 0.5,
          intensity: 100 * 5,
          distance: 60,
          color: "#fa6710",
          castShadow: true,
        }}
        pointLightProps={{
          position: [-7.7944 * 5, 8.4728 * 5, 8.0389 * 5],
          intensity: 1000 * 5,
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
          htmlScale={showChatBot ? [0.2, 0.2, 0.8] : [0.3, 0.3, 0.8]}
          ref={screenRef}
          onInteractionStart={handleInteractionStart}
          onInteractionEnd={handleInteractionEnd}
        />
      </Suspense>
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={true}
        minDistance={1}
        maxDistance={100}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
        enableDamping={true} // Enable damping (smooth scrolling)
        dampingFactor={0.1} // Adjust damping factor for smoothness
      />
    </>
  );
}

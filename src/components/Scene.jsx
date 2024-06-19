import { Suspense, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import "@/App.css";
import { ComputerModel } from "@/components/ComputerModel.jsx";
import { Environment, OrbitControls } from "@react-three/drei";
import { useThree } from "react-three-fiber";
import * as THREE from "three";
import { useSelector } from "react-redux";
import SpotAndPointLightComponent from "@/components/SpotAndPointLightComponent.jsx";

export default function Scene() {
  const controlsRef = useRef();
  const screenRef = useRef();
  const { camera } = useThree();
  const zoom = useSelector((state) => state.appReducer.zoom);
  const showChatBot = useSelector((state) => state.appReducer.started);
  const targetZoom = useRef(camera.zoom);

  useEffect(() => {
    if (screenRef.current && controlsRef.current) {
      const box = new THREE.Box3().setFromObject(screenRef.current);
      const center = box.getCenter(new THREE.Vector3());

      // Set initial camera position and target
      camera.position.set(center.x, center.y, center.z + 100);
      controlsRef.current.target.set(center.x, center.y, center.z);
    }
  }, [camera]);

  useEffect(() => {
    if (zoom === 2) {
      targetZoom.current = 2;
    }
  }, [zoom]);

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
    // Smoothly interpolate camera zoom
    if (camera.zoom !== targetZoom.current) {
      camera.zoom = THREE.MathUtils.lerp(camera.zoom, targetZoom.current, 0.1);
      camera.updateProjectionMatrix();
    }
  });

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
      />
      <Environment preset="night" />
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
        minDistance={40}
        maxDistance={200}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
        enableDamping={true}
        dampingFactor={0.1}
      />
    </>
  );
}

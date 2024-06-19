import React, { useEffect, useRef, useState } from "react";
import { useThree } from "react-three-fiber";
import * as THREE from "three";

export default function SpotAndPointLightComponent({
  spotLightProps,
  pointLightProps,
}) {
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

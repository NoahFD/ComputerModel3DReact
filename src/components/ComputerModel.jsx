import { forwardRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { Provider, useSelector } from "react-redux";
import ChatBot from "@/components/ChatBot.jsx";
import WelcomeHtml from "@/components/WelcomeHtml.jsx";
import store from "@/redux/store.js";

export const ComputerModel = forwardRef(
  ({ htmlScale, onInteractionStart, onInteractionEnd }, ref) => {
    const { nodes, materials } = useGLTF("/old_computer.glb");
    const handlePointerDown = (event) => {
      event.stopPropagation();
      onInteractionStart();
    };
    const showChatBot = useSelector((state) => state.appReducer.started);
    const handlePointerUp = (event) => {
      event.stopPropagation();
      onInteractionEnd();
    };

    return (
      <group dispose={null} scale={8}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PCButton01.geometry}
          material={materials.Blue}
          position={[0.986, 0.873, 1.929]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PCButton02.geometry}
          material={materials.Red}
          position={[1.49, 0.873, 1.949]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MonitorBackPart.geometry}
          material={materials.Grey}
          position={[0, 1.549, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MonitorButton01.geometry}
          material={materials.Blue}
          position={[0.698, 1.892, 1.768]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MonitorButton02.geometry}
          material={materials.Yellow}
          position={[1.01, 1.892, 1.768]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KeyboardBase.geometry}
          material={materials.White}
          position={[0, 0, 3.5]}
        />
        <group position={[0, 0, 3.5]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021.geometry}
            material={materials.White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_1.geometry}
            material={materials.Yellow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_2.geometry}
            material={materials.DarkGrey}
          />
        </group>
        <group position={[3.267, 0, 3.313]} rotation={[0, 0.241, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane017.geometry}
            material={materials.Grey}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane017_1.geometry}
            material={materials.Grey}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseSide.geometry}
          material={materials.Grey}
          position={[3.267, 0, 3.313]}
          rotation={[0, 0.241, 0]}
        />
        <group position={[3.267, 0, 3.313]} rotation={[0, 0.241, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022.geometry}
            material={materials.Grey}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022_1.geometry}
            material={materials.Grey}
          />
        </group>
        <group position={[3.267, 0, 3.313]} rotation={[0, 0.241, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011.geometry}
            material={materials.White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011_1.geometry}
            material={materials.White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011_2.geometry}
            material={materials.White}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseCable.geometry}
          material={materials.White}
          position={[1.272, 0.712, -2.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PCPoint.geometry}
          material={materials.DarkGrey}
          position={[1.272, 0.712, -2.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MonitorFrontPart.geometry}
          material={materials.White}
          position={[0, 1.549, 0]}
        >
          <Html
            transform
            occlude
            castShadow
            receiveShadow
            // scale={100}
            // rotation={[Math.PI / 2, 0, 0]}
            position={[0, 4, 1]}
          >
            <div className="bg-black p-2 rounded-lg text-xs font-retro">
              <div>Spectrum 2024</div>
              <div>$ 1,234</div>
            </div>
          </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OuterScreen.geometry}
          material={materials.Grey}
          position={[0, 3.024, 1.749]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          ref={ref}
          castShadow
          receiveShadow
          geometry={nodes.ScreenInner.geometry}
          material={materials.Black}
          position={[0, 3.024, 1.749]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <Html
            castShadow
            receiveShadow
            occlude
            transform
            rotation={[Math.PI / 2, Math.PI, Math.PI]}
            position={[0, 0.01, 0]} // Adjust this as needed to fit the screen
            scale={htmlScale} // Adjust this as needed to fit the screen
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          >
            <Provider store={store}>
              {showChatBot ? <ChatBot /> : <WelcomeHtml />}
            </Provider>
          </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials.Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023_1.geometry}
          material={materials.Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.White}
        />
      </group>
    );
  },
);

useGLTF.preload("/old_computer.glb");

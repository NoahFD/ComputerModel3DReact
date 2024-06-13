import React, { useRef } from 'react'
import {PerspectiveCamera, useGLTF, RenderTexture, Text, Html} from '@react-three/drei'
import {useFrame} from "@react-three/fiber";


function Screen({ frame, children, ...props }) {
    const { nodes, materials } = useGLTF('/old_computer.glb');
    return (
        <group {...props}>
            {/*<mesh castShadow receiveShadow geometry={nodes[frame].geometry} material={materials.Black} />*/}
            <mesh geometry={nodes[frame].geometry}>
                <meshBasicMaterial toneMapped={false}>
                    <RenderTexture width={1000} height={1000} attach="map" anisotropy={16}>
                        {children}
                    </RenderTexture>
                </meshBasicMaterial>
            </mesh>
        </group>
    );
}

function ScreenText({ x = 0, y = 1.2, ...props }) {
    const textRef = useRef();
    const rand = Math.random() * 10000;
    useFrame((state) => {
        if (textRef.current) {
            textRef.current.position.x = x + Math.sin(rand + state.clock.elapsedTime / 4) * 8;
        }
        // console.log(textRef.current.position.x)
    });
    return (
        <Screen {...props}>
            {/*<PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 10, 0]} />*/}
            {/*<color attach="background" args={['black']} />*/}
            {/*<ambientLight intensity={0.5} />*/}
            {/*<directionalLight position={[10, 10, 5]} />*/}
            <Text font="/Inter-Medium.woff" position={[x, y, 0]} ref={textRef} fontSize={4}    anchorX="center"
                  anchorY="middle" letterSpacing={-0.1} color='white'>
                Poimandres.
            </Text>
        </Screen>
    );
}


export function ComputerModel(props) {
    const { nodes, materials } = useGLTF('/old_computer.glb')
    return (
        <group {...props} dispose={null}>
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
                geometry={nodes.ComputerScreen.geometry}
                material={materials.Black}
                position={[0, 1.549, 0]}
            >
                <Html
                    style={{userSelect: 'none'}}
                    castShadow
                    receiveShadow
                    occlude="blending"
                    transform
                    position={[0, 1.549, 0]} // Adjust this as needed to fit the screen
                    scale={[0.5, 0.5,0.5]} // Adjust this as needed to fit the screen
                >
                    <iframe
                        title="embed"
                        width={1024}
                        height={768}
                        src="https://threejs.org/"
                        frameBorder={0}
                    />
                </Html>
            </mesh>

            {/*<ScreenText frame="ComputerScreen" position={[0, 1.549, 0]} />*/}
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
            />
            <mesh castShadow receiveShadow geometry={nodes.Plane023.geometry} material={materials.Grey}/>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane023_1.geometry}
                material={materials.Grey}
            />
            <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials.White}/>
            <mesh castShadow receiveShadow geometry={nodes.Plane_1.geometry} material={materials.White}/>
        </group>
    )
}

useGLTF.preload('/old_computer.glb')
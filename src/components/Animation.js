import React, {useRef} from 'react'
import {Canvas, useFrame} from "react-three-fiber"
import { softShadows } from '@react-three/drei'

const Box = ({pos, args, color}) => {
    const mesh = useRef(null);
    useFrame(() => (
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01 
    ));
    return (
        <mesh castShadow position={pos} ref={mesh}>
            <boxBufferGeometry attach="geometry" args={args} />
            <meshStandardMaterial attach="material" color={color} />
        </mesh>
    )
}

function Animation() {
    return (
        <>
            <div className='h-screen w-full'>
                <Canvas shadows colorManagement camera={{position: [-5, 2, 10], fov: 60}}>
                    {/* floodlight */}
                    <ambientLight intensity={0.3} />
                    {/* light from top to cast shadow */}
                    <directionalLight 
                        castShadow
                        intensity={1.5} 
                        position={[0,10,0]} 
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-far={50}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10}
                        />
                    {/* create shadows on the sides of box */}
                    <pointLight 
                        intensity={0.5} 
                        position={[-10,0,-20]} />
                    <pointLight 
                        intensity={1.5} 
                        position={[0,-10,0]} />

                    <group>
                        <mesh receiveShadow rotation={[-Math.PI/2, 0, 30*Math.PI/180]} position={[0,-3,0]}>
                            <planeBufferGeometry attach="geometry" args={[100,100]} />
                            <shadowMaterial attach="material" opacity={0.3} />
                        </mesh>
                    </group>


                    <Box 
                        pos={[0,1,0]} 
                        args={[3,2,1]} 
                        color="lightblue"/>
                    <Box 
                        pos={[-2,1,-5]} 
                        color="pink" />
                    <Box 
                        pos={[5,1,-2]} 
                        color="pink" />
                </Canvas>
            </div>
        </>
    )
}

export default Animation

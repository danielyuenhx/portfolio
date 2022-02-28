import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from "react-three-fiber"
import { softShadows, MeshWobbleMaterial } from '@react-three/drei'
import { useSpring, a } from 'react-spring'

softShadows();

const Box = ({pos, args, color, speed, factor}) => {
    const mesh = useRef(null);
    useFrame(() => (
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01 
    ));
    return (
        <mesh castShadow position={pos} ref={mesh}>
            <boxBufferGeometry attach="geometry" args={args} />
            <MeshWobbleMaterial attach="material" color={color} speed={speed} factor={factor} />
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


                    <mesh receiveShadow rotation={[-Math.PI/2, 0, 30*Math.PI/180]} position={[0,-3,0]}>
                        <planeBufferGeometry attach="geometry" args={[100,100]} />
                        <shadowMaterial attach="material" opacity={0.3} />
                    </mesh>


                    <Box 
                        pos={[0,1,0]} 
                        args={[3,2,1]} 
                        color="lightblue"
                        speed={1}
                        factor={0.6} />
                    <Box 
                        pos={[-2,1,-5]} 
                        color="pink"
                        speed={3}
                        factor={2} />
                    <Box 
                        pos={[5,1,-2]} 
                        color="pink"
                        speed={4}
                        factor={1.5} />
                </Canvas>
            </div>
        </>
    )
}

export default Animation

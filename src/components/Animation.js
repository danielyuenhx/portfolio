import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from "react-three-fiber"
import { softShadows, MeshWobbleMaterial } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'

softShadows();

// var spinSpeed = 0.5;
// var time = 15;

const Box = ({spinSpeed, time, pos, args, color, speed, factor}) => {
    const mesh = useRef(null);
    useFrame(() => {
        if (spinSpeed > 0.0075) {
            spinSpeed -= Math.pow(spinSpeed,2)/time;
            time -= 0.01;
        }
        mesh.current.rotation.x = mesh.current.rotation.y += spinSpeed
    })

    // scaling on click
    const [zoom, setZoom] = useState(false);
    const props = useSpring({
        scale: zoom ? [1.5, 1.5, 1.5] : [1, 1, 1]
    })

    return (
        <a.mesh onPointerEnter={() => setZoom(!zoom)} onPointerLeave={() => setZoom(!zoom)} scale={props.scale} castShadow position={pos} ref={mesh}>
            <boxBufferGeometry attach="geometry" args={args} />
            <MeshWobbleMaterial attach="material" color={color} speed={speed} factor={factor} />
        </a.mesh>
    )
}

function Animation() {
    return (
        <>
            <div className='h-screen w-[500px] mr-[0%] lg:mr-[12%] z-1 absolute right-0'>
                <Canvas shadows colorManagement camera={{position: [-5, 0, 10], fov: 50}}>
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
                        <shadowMaterial attach="material" opacity={0.3} color={"black"} />
                    </mesh>

                    {/* <mesh rotation={[-Math.PI/2, 0, 30*Math.PI/180]} position={[0,-3,0]}>
                        <planeBufferGeometry attach="geometry" args={[100,100]} />
                        <meshStandardMaterial attach="material" opacity={0.3} color={"white"} />
                    </mesh> */}


                    <Box 
                        spinSpeed={0.1}
                        time={1}
                        pos={[0,0.5,0]} 
                        args={[3,2,1]} 
                        color="lightblue"
                        speed={1}
                        factor={0.6} />
                    <Box 
                        spinSpeed={0.1}
                        time={1}
                        pos={[-2,1,-5]} 
                        args={[1,1,1]} 
                        color="pink"
                        speed={3}
                        factor={2} />
                    <Box 
                        spinSpeed={0.1}
                        time={1}
                        pos={[5,1,-2]} 
                        args={[1,1,1]} 
                        color="pink"
                        speed={4}
                        factor={1.5} />
                </Canvas>
            </div>
        </>
    )
}

export default Animation

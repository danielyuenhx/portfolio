import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from "react-three-fiber"
import { softShadows, MeshWobbleMaterial } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'

softShadows();

/**
 * Creates a buffer geometry.
 * 
 * @param {String} geometry Geometry type, eg. box, sphere, icosahedron (https://threejs.org/docs/)
 * @param {Number} spinSpeed Initial geometry spinning speed
 * @param {Number} time Time to reduce speed to 0.0075
 * @param {Array[Number]} pos Position arguments
 * @param {Array[Number]} args Geometry arguments, eg. width, height, radius
 * @param {String} color Geometry colour
 * @param {Number} speed Geometry wobble speed
 * @param {Number} factor Geometry wobble factor
 * @returns a.mesh
 */
const Geometry = ({geometry, spinSpeed, time, pos, args, color, speed, factor}) => {
    const GeometryTag = geometry + 'BufferGeometry';

    const mesh = useRef(null);
    // updates rotation, decreases slowly to 0.0075
    useFrame(() => {
        if (spinSpeed > 0.0075) {
            spinSpeed -= Math.pow(spinSpeed,2)/time;
            time -= 0.01;
        }
        mesh.current.rotation.x = mesh.current.rotation.y += spinSpeed
    })

    // scaling function
    const [zoom, setZoom] = useState(false);
    const props = useSpring({
        scale: zoom ? [1.5, 1.5, 1.5] : [1, 1, 1]
    })

    // scales on pointer enter and returns to normal on leave
    return (
        <a.mesh onPointerEnter={() => setZoom(!zoom)} onPointerLeave={() => setZoom(!zoom)} scale={props.scale} castShadow position={pos} ref={mesh}>
            <GeometryTag attach="geometry" args={args} />
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
                        intensity={1} 
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


                    <Geometry
                        geometry={'box'}
                        spinSpeed={0.1}
                        time={1}
                        pos={[0,0.5,0]} 
                        args={[1,2,3]} 
                        color="lightblue"
                        speed={1}
                        factor={0.6} />
                    <Geometry 
                        geometry={'icosahedron'}
                        spinSpeed={0.1}
                        time={1}
                        pos={[-1.5,1,-5]} 
                        args={[0.75,0]} 
                        color="pink"
                        speed={4}
                        factor={1.5} />
                    <Geometry 
                        geometry={'torus'}
                        spinSpeed={0.1}
                        time={1}
                        pos={[5,1,-2]} 
                        args={[1, 0.3, 16, 100]} 
                        color="lightpurple"
                        speed={3}
                        factor={1.5} />
                </Canvas>
            </div>
        </>
    )
}

export default Animation

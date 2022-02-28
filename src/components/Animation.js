import React, {useRef} from 'react'
import {Canvas, useFrame} from "react-three-fiber"

const Box = () => {
    const mesh = useRef();
    useFrame(() => (
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01 
    ));
    return (
        <mesh ref={mesh}>
            <boxBufferGeometry attach="geometry" args={[1,1,1]} />
            <meshStandardMaterial attach="material" />
        </mesh>
    )
}

function Animation() {
    return (
        <>
            <div className='h-screen w-90'>
                <Canvas>
                    <Box />
                </Canvas>
            </div>
        </>
    )
}

export default Animation
